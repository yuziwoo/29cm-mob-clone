import { useCallback, useState } from 'react';
import useCart from '../../../hooks/cart/useCart';
import CartListItem from '../CartListItem/CartListItem';
import { ComponentStyle as S } from './CartListWrap.styled';
import CartPayingButton from '../CartPayingButton/CartPayingButton';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import IconCheckbox2 from '../../icons/IconCheckbox2';
import { theme } from '../../../styles/theme';
import CartFinalAmount from '../CartFinalAmount/CartFinalAmount';

const CartListWrap = () => {
  /**
   * 장바구니 페이지에서 장바구니 리스트를 감싸는 역할의 컴포넌트입니다.
   * 상품을 나열, 선택/취소, 수량 수정, 삭제 등의 기능을 담당합니다.
   */

  const { cartQuery, updateItemQuantity, removeItem } = useCart();
  const [selectedItemKeys, setSelectedItemKeys] = useState<string[]>(
    cartQuery.data !== undefined ? Object.keys(cartQuery.data) : []
  );

  const handleCheckItem = useCallback(
    (itemKey: string) => {
      if (selectedItemKeys.includes(itemKey)) {
        setSelectedItemKeys((prevItemKeys) => prevItemKeys.filter((value) => value !== itemKey));
        return;
      }
      setSelectedItemKeys((prevItemKeys) => [...prevItemKeys, itemKey]);
    },
    [selectedItemKeys]
  );

  const handleRemoveItems = useCallback(
    (itemKey: string) => {
      removeItem.mutate({ itemKey });
      setSelectedItemKeys((prevItemKeys) => prevItemKeys.filter((value) => value !== itemKey));
    },
    [removeItem]
  );

  const handleClickCheckbox = useCallback(
    (cartDataKeys: string[]) => {
      if (selectedItemKeys.length === cartDataKeys.length) {
        setSelectedItemKeys([]);
        return;
      }
      setSelectedItemKeys([...cartDataKeys]);
    },
    [selectedItemKeys]
  );

  const handleRemoveCheckedItems = useCallback(() => {
    selectedItemKeys.forEach((itemKey) => {
      handleRemoveItems(itemKey);
    });
  }, [handleRemoveItems, selectedItemKeys]);

  if (!cartQuery.isSuccess) return <></>;
  return (
    <S.Component>
      <S.Header>
        <S.SelectAll>
          <CommonButton>
            <S.Checkbox
              onClick={() => {
                handleClickCheckbox(Object.keys(cartQuery.data));
              }}
            >
              <IconCheckbox2
                checkedColor={theme.color.SIGNATURE}
                isChecked={selectedItemKeys.length === Object.keys(cartQuery.data).length}
              />
            </S.Checkbox>
            <S.SelectAmount>
              전체 선택 {selectedItemKeys.length}/{Object.keys(cartQuery.data).length}
            </S.SelectAmount>
          </CommonButton>
        </S.SelectAll>

        {selectedItemKeys.length > 0 && (
          <CommonButton>
            <S.SelectRemove onClick={handleRemoveCheckedItems}>선택 삭제</S.SelectRemove>
          </CommonButton>
        )}
      </S.Header>

      <S.List>
        {Object.keys(cartQuery.data).map((itemKey) => (
          <CartListItem
            productId={cartQuery.data[itemKey].productId}
            isChecked={selectedItemKeys.includes(itemKey)}
            onToggleCheck={() => {
              handleCheckItem(itemKey);
            }}
            onCountChange={(count: number) => {
              updateItemQuantity.mutate({ itemKey, count });
            }}
            onRemoveItem={() => {
              handleRemoveItems(itemKey);
            }}
            count={cartQuery.data[itemKey].count}
            options={cartQuery.data[itemKey].options}
            key={itemKey}
          />
        ))}
      </S.List>

      <CartFinalAmount cartData={selectedItemKeys.map((itemKey) => cartQuery.data[itemKey])} />
      <CartPayingButton cartData={selectedItemKeys.map((itemKey) => cartQuery.data[itemKey])} />
    </S.Component>
  );
};

export default CartListWrap;

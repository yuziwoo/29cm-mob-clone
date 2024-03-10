import { ComponentStyle as S } from './MyEditInfoList.styled';

interface MyEditInfoListProps {
  placeholder: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  providerId: string | undefined;
}

const MyEditInfoList = (props: MyEditInfoListProps) => {
  /**
   * 유저의 이름 정보를 수정할 수 있습니다.
   * 그 외에 같은 디자인으로 이메일과 계정 연동 정보를 보여줍니다.
   */

  const { placeholder, onChangeInput, email, providerId } = props;

  return (
    <S.Component>
      <S.Ul>
        <S.Li>
          <label htmlFor="my-edit-DisplayName" style={{ display: 'inline-block' }}>
            <S.Th>이름</S.Th>
          </label>
          <S.Input
            type="text"
            name="my-edit-DisplayName"
            id="my-edit-DisplayName"
            placeholder={placeholder}
            maxLength={10}
            onChange={onChangeInput}
          />
        </S.Li>
        <S.Li>
          <S.Th>이메일</S.Th>
          <S.Td>{email}</S.Td>
        </S.Li>
        <S.Li>
          <S.Th>계정연동</S.Th>
          <S.Td>{providerId}</S.Td>
        </S.Li>
      </S.Ul>
    </S.Component>
  );
};

export default MyEditInfoList;

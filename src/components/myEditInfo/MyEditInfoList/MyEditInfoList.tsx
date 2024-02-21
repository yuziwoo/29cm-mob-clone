import * as S from './MyEditInfoList.styled';

interface MyEditInfoListProps {
  placeholder: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  providerId: string | undefined;
}

const MyEditInfoList = (props: MyEditInfoListProps) => {
  const { placeholder, onChangeInput, email, providerId } = props;

  return (
    <S.InfoList>
      <li>
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
      </li>
      <li>
        <S.Th>이메일</S.Th>
        <S.Td>{email}</S.Td>
      </li>
      <li>
        <S.Th>계정연동</S.Th>
        <S.Td>{providerId}</S.Td>
      </li>
    </S.InfoList>
  );
};

export default MyEditInfoList;

interface TextLineTranslateProps {
  text: string;
  fontStyle?: React.CSSProperties;
}

const TextLineTranslate = ({ text, fontStyle }: TextLineTranslateProps) => {
  /**
   * 문자열의 \n 개행 문자를 <br />로 바꿔주는 컴포넌트입니다.
   */

  const textArray = text.split('\n');
  const finalIndex = textArray.length - 1;

  return (
    <>
      {textArray.map((text, index) => (
        <p key={index} style={fontStyle}>
          {text}
          {index !== finalIndex && <br />}
        </p>
      ))}
    </>
  );
};

export default TextLineTranslate;

import { theme } from '../../styles/theme';

interface IconDownloadProps {
  color?: string;
}

const IconDownload = ({ color = theme.color.WHITE }: IconDownloadProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3317 6.60022L7.19551 10.4144L6.74129 10.8422L6.73663 10.8376L5.68974 9.86533L5.69285 9.86222L2.22396 6.622L3.36418 5.71667L5.95418 8.21644L5.95574 0H7.41329V8.30511L10.3004 5.69489L11.3317 6.60022ZM11.814 12.0524V13.5193H1.64062V12.0524H11.814Z"
        fill={color}
      />
    </svg>
  );
};

export default IconDownload;

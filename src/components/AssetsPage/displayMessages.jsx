import { defineMessages } from 'react-intl';

const messages = defineMessages({
  assetsPageNoResultsMessage: {
    id: 'assetsPageNoResultsMessage',
    defaultMessage: 'Không tìm thấy tệp nào',
    description: 'Message displayed in table when no results are found.',
  },
  assetsPageNoAssetsMessage: {
    id: 'assetsPageNoAssetsMessage',
    defaultMessage: 'Không có tệp nào được tải lên',
    description: 'Message displayed when a course has no files to display in the table.',
  },
  assetsPageSkipLink: {
    id: 'assetsPageSkipLink',
    defaultMessage: 'Bỏ qua để đến nội dung bảng',
    description: 'Link text for a link that will skip user focus over table filters to table contents.',
  },
});

export default messages;

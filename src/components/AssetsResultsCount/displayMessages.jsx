import { defineMessages } from 'react-intl';

const messages = defineMessages({
  assetsResultsCountFiltered: {
    id: 'assetsResultsCountFiltered',
    defaultMessage: 'Hiển thị từ {start} đến {end} trong tổng số {total, plural, one {{formatted_total} kết quả khả thi} other {{formatted_total} kết quả khả thi}}.',
    description: 'Message above a paginated table describing what subset of a filtered result set is currently visible.',
  },
  assetsResultsCountTotal: {
    id: 'assetsResultsCountTotal',
    defaultMessage: 'Hiển thị từ {start} đến {end} trong tổng số {total, plural, one {{formatted_total} tệp tin tổng cộng} other {{formatted_total} tệp tin tổng cộng}}.',
    description: 'Message above a paginated table of files describing what subset of all files is currently visible.',
  },
});

export default messages;

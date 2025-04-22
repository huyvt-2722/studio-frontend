import { defineMessages } from 'react-intl';

const messages = defineMessages({
  assetsTablePreviewLabel: {
    id: 'assetsTablePreviewLabel',
    defaultMessage: 'Chế độ xem trước hình ảnh.',
    description: 'Label for column header',
  },
  assetsTableNameLabel: {
    id: 'assetsTableNameLabel',
    defaultMessage: 'Tên',
    description: 'Label for column header',
  },
  assetsTableTypeLable: {
    id: 'assetsTableTypeLable',
    defaultMessage: 'Loại',
    description: 'Label for column header',
  },
  assetsTableDateLabel: {
    id: 'assetsTableDateLabel',
    defaultMessage: 'Ngày đã thêm',
    description: 'Label for column header',
  },
  assetsTableCaption: {
    id: 'assetsTableCaption',
    defaultMessage: 'Bảng tài nguyên',
    description: 'Table specific caption for a high level description',
  },
  assetsTableCopyLabel: {
    id: 'assetsTableCopyLabel',
    defaultMessage: 'Sao chép URL',
    description: 'Label for column header',
  },
  assetsTableDeleteLabel: {
    id: 'assetsTableDeleteLabel',
    defaultMessage: 'Xoá tài nguyên',
    description: 'Label for column header',
  },
  assetsTableLockLabel: {
    id: 'assetsTableLockLabel',
    defaultMessage: 'Khoá tài nguyên',
    description: 'Label for column header',
  },
  assetsTableNoDescription: {
    id: 'assetsTableNoDescription',
    defaultMessage: 'Mô tả không có sẵn.',
    description: 'Label shown when no description is available',
  },
  assetsTableNoPreview: {
    id: 'assetsTableNoPreview',
    defaultMessage: 'Xem trước không có sẵn',
    description: 'Label shown when no preview is available',
  },
  assetsTableLockedObject: {
    id: 'assetsTableLockedObject',
    defaultMessage: 'Khoá {object}',
    description: 'States that an object has just been locked',
  },
  assetsTableUnlockedObject: {
    id: 'assetsTableUnlockedObject',
    defaultMessage: 'Mở khoá {object}',
    description: 'States that an object has just been unlocked',
  },
  assetsTableUpdateLock: {
    id: 'assetsTableUpdateLock',
    defaultMessage: 'Đang cập nhật trạng thái khóa cho {assetName}.',
    description: 'States that the lock status of an item is updating',
  },
  assetsTableStudioLink: {
    id: 'assetsTableStudioLink',
    defaultMessage: 'Studio',
    description: 'Label that indicates a relative (as opposed to an absolute) URL',
  },
  assetsTableWebLink: {
    id: 'assetsTableWebLink',
    defaultMessage: 'Web',
    description: 'Label that indicates an absolute (as opposed to a relative) URL',
  },
  assetsTableCopiedStatus: {
    id: 'assetsTableCopiedStatus',
    defaultMessage: 'Đã sao chép',
    description: 'States that a URL was copied',
  },
  assetsTableDetailedCopyLink: {
    id: 'assetsTableDetailedCopyLink',
    defaultMessage: '{displayName} sao chép URL {label}.',
    description: 'Labels a button that is used to copy the studio/web URL for a given item',
  },
  assetsTableDeleteObject: {
    id: 'assetsTableDeleteObject',
    defaultMessage: 'Xoá tệp',
    description: 'Heading on the modal used to delete a file',
  },
  assetsTableCancel: {
    id: 'assetsTableCancel',
    defaultMessage: 'Huỷ bỏ',
    description: 'Labels the "Cancel" button in a modal',
  },
  assetsTablePermaDelete: {
    id: 'assetsTablePermaDelete',
    defaultMessage: 'Xoá vĩnh viễn',
    description: 'Indicates a non-recoverable, permanent delete',
  },
  assetsTableLearnMore: {
    id: 'assetsTableLearnMore',
    defaultMessage: 'Tìm hiểu thêm.',
    description: 'Label for a documentation link',
  },
  assetsTableDeleteWarning: {
    id: 'assetsTableDeleteWarning',
    defaultMessage: 'Việc xóa {displayName} không thể hoàn tác.',
    description: 'Warning that indicates the delete operation is permanent',
  },
  assetsTableDeleteConsequences: {
    id: 'assetsTableDeleteConsequences',
    defaultMessage: 'Mọi liên kết hoặc tham chiếu đến tệp này sẽ không còn hoạt động. {link}',
    description: 'Warns of the consequences of deleting an item',
  },
});

export default messages;

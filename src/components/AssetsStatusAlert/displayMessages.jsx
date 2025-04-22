import { defineMessages } from 'react-intl';

const messages = defineMessages({
  assetsStatusAlertGenericUpdateError: {
    id: 'assetsTableGenericUpdateError',
    defaultMessage: 'Hành động không thể hoàn tất. Hãy làm mới trang và thử lại hành động.',
    description: 'States that the action could not be completed and asks the user to refresh the page and try the action again',
  },
  assetsStatusAlertCantDelete: {
    id: 'assetsTableCantDelete',
    defaultMessage: 'Không thể xóa {assetName}.',
    description: 'States that an item could not be deleted',
  },
  assetsStatusAlertDeleteSuccess: {
    id: 'assetsTableDeleteSuccess',
    defaultMessage: '{assetName} đã được xoá.',
    description: 'States that an item was successfully deleted',
  },
  assetsStatusAlertUploadSuccess: {
    id: 'assetsTableUploadSuccess',
    defaultMessage: '{uploaded_count} tệp đã tải lên thành công.',
    description: 'States that files were successfully uploaded',
  },
  assetsStatusAlertUploadInProgress: {
    id: 'assetsTableUploadInProgress',
    defaultMessage: '{uploading_count} tệp đang tải lên.',
    description: 'States that the file upload operation is in progress',
  },
  assetsStatusAlertTooManyFiles: {
    id: 'assetsTableTooManyFiles',
    defaultMessage: 'Số lượng tệp tối đa cho một lần tải lên là {max_count}. Không có tệp nào được tải lên.',
    description: 'Error message shown when too many files are selected for upload',
  },
  assetsStatusAlertTooMuchData: {
    id: 'assetsTableTooMuchData',
    defaultMessage: 'Kích thước tối đa cho một lần tải lên là {max_size} MB. Không có tệp nào được tải lên.',
    description: 'Error message shown when too much data is being uploaded',
  },
  assetsStatusAlertGenericError: {
    id: 'assetsTableGenericError',
    defaultMessage: 'Lỗi khi tải lên {assetName}. Vui lòng thử lại.',
    description: 'Generic error message while uploading files',
  },
  assetsStatusAlertFailedLock: {
    id: 'assetsTableFailedLock',
    defaultMessage: 'Không thể thay đổi trạng thái khóa cho {assetName}.',
    description: 'States that there was a failure toggling an item\'s lock status',
  },
  assetsStatusAlertLoadingStatus: {
    id: 'assetsTableLoadingStatus',
    defaultMessage: 'Đang tải',
    description: 'Indicates something is loading',
  },
});

export default messages;

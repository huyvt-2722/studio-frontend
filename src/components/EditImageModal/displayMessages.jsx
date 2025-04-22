import { defineMessages } from 'react-intl';

const messages = defineMessages({
  editImageModalAssetsListLoadingSpinner: {
    id: 'editImageModalAssetsListLoadingSpinner',
    defaultMessage: 'Đang tải',
    description: 'Description of a loading spinner image shown when files are loading.',
  },
  editImageModalAssetsListNoAssetsMessage: {
    id: 'editImageModalAssetsListNoAssetsMessage',
    defaultMessage: 'Chưa có hình ảnh nào được tải lên',
    description: 'Message displayed when a course has no images to display in the list.',
  },
  editImageModalAssetsListNoResultsMessage: {
    id: 'editImageModalAssetsListNoResultsMessage',
    defaultMessage: 'Không tìm thấy hình ảnh nào',
    description: 'Message displayed in table when no image results are found.',
  },
  editImageModalCancelButton: {
    id: 'editImageModalCancelButton',
    defaultMessage: 'Huỷ bỏ',
    description: 'Button text to close the modal',
  },
  editImageModalFormError: {
    id: 'editImageModalFormError',
    defaultMessage: 'Lỗi',
    description: 'Screenreader-only text describing an error icon in a validation message',
  },
  editImageModalFormErrorMissingFields: {
    id: 'editImageModalFormErrorMissingFields',
    defaultMessage: 'Hãy chắc chắn điền đầy đủ tất cả các trường.',
    description: 'Error message to instruct user to fill in all fields',
  },
  editImageModalFormValidImageDescription: {
    id: 'editImageModalFormValidImageDescription',
    defaultMessage: 'Thêm mô tả cho hình ảnh hoặc chỉ ra rằng hình ảnh chỉ mang tính trang trí.',
    description: 'Error message for when an invalid image description is entered into the form',
  },
  editImageModalFormValidImageDimensions: {
    id: 'editImageModalFormValidImageDimensions',
    defaultMessage: 'Kích thước hình ảnh phải là số dương.',
    description: 'Error message displayed when invalid image dimension values are entered into a form',
  },
  editImageModalImageDescriptionDescription: {
    id: 'editImageModalImageDescriptionDescription',
    defaultMessage: 'Văn bản thay thế cho người dùng không thể xem hình ảnh, chẳng hạn như \"Bầu trời với những đám mây\".',
    description: 'Description for the text input box for an image\'s description',
  },
  editImageModalImageDescriptionLabel: {
    id: 'editImageModalImageDescriptionLabel',
    defaultMessage: 'Mô tả ảnh (Văn bản thay thế)',
    description: 'Label for the text input box for an image\'s description',
  },
  editImageModalImageDescriptionLegend: {
    id: 'editImageModalImageDescriptionLegend',
    defaultMessage: 'Mô tả ảnh',
    description: 'Label for input section for an image\'s description',
  },
  editImageModalDimensionsLegend: {
    id: 'editImageModalDimensionsLegend',
    defaultMessage: 'Kích thước ảnh',
    description: 'Label for the input section for an image\'s dimensions',
  },
  editImageModalImageHeightLabel: {
    id: 'editImageModalImageHeight',
    defaultMessage: 'Chiều cao',
    description: 'Label for the text input box for an image\'s height,',
  },
  editImageModalImageIsDecorativeCheckboxDescription: {
    id: 'editImageModalImageIsDecorativeCheckboxDescription',
    defaultMessage: 'Hình ảnh này là hình nền hoặc một loại hình ảnh khác không yêu cầu văn bản thay thế.',
    description: 'Description for a checkbox that explains what it means for an image to be decorative',
  },
  editImageModalImageIsDecorativeCheckboxLabel: {
    id: 'editImageModalImageIsDecorativeCheckboxLabel',
    defaultMessage: 'Hình ảnh này chỉ mang tính trang trí.',
    description: 'Label for a checkbox that denotes that an image is decorative',
  },
  editImageModalImagePreviewText: {
    id: 'editImageModalImagePreviewText',
    defaultMessage: 'Xem trước ảnh',
    description: 'Label for the image preview area',
  },
  editImageModalInsertImageButton: {
    id: 'editImageModalInsertImageButton',
    defaultMessage: 'Chèn ảnh',
    description: 'Text inside the Insert Image button at the bottom of the modal',
  },
  editImageModalLearnMore: {
    id: 'editImageModalLearnMore',
    defaultMessage: 'Tìm hiểu thêm.',
    description: 'Label for a link to additional documentation',
  },
  editImageModalLockImageProportionsCheckboxLabel: {
    id: 'editImageModalLockImageProportionsCheckboxLabel',
    defaultMessage: 'Khóa tỷ lệ',
    description: 'Label for a checkbox that constrains an image\'s proportions to its original aspect ratio',
  },
  editImageModalImageWidthLabel: {
    id: 'editImageModalImageWidth',
    defaultMessage: 'Chiều rộng',
    description: 'Label for the text input box for an image\'s width,',
  },
  editImageModalInsertTitle: {
    id: 'editImageModalInsertTitle',
    defaultMessage: 'Thêm ảnh',
    description: 'Title of the modal used for adding an image',
  },
  editImageModalInsertHeader: {
    id: 'editImageModalInsertHeader',
    defaultMessage: 'Chọn một ảnh đã tải lên trước đó',
    description: 'Header of the modal used for adding an image',
  },
  editImageModalEditTitle: {
    id: 'editImageModalEditTitle',
    defaultMessage: 'Chỉnh sửa ảnh',
    description: 'Title of the modal used for editing image settings',
  },
  editImageModalImageOrFields: {
    id: 'editImageModalImageOrFields',
    defaultMessage: 'hoặc',
    description: 'Describes two choices,',
  },
  editImageModalNextPageButton: {
    id: 'editImageModalNextPageButton',
    defaultMessage: 'Sau',
    description: 'Button text to go to the next screen',
  },
  editImageModalPreviousPageButton: {
    id: 'editImageModalPreviousPageButton',
    defaultMessage: 'Trở lại',
    description: 'Button text to go to the previous screen',
  },
  editImageModalInvalidFileType: {
    id: 'editImageModalInvalidFileType',
    defaultMessage: 'Các tệp phải là hình ảnh, ví dụ như các tệp .jpg, .png và .tiff. Chưa có tệp nào được tải lên.',
    description: 'Error message shown when an invalid file is selected for upload',
  },
  editImageModalTooManyFiles: {
    id: 'editImageModalTooManyFiles',
    defaultMessage: 'Chỉ có thể tải lên một tệp tại một thời điểm. Chưa có tệp nào được tải lên.',
    description: 'Error message shown when too many files are selected for upload',
  },
});

export default messages;

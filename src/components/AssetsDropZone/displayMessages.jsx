import { defineMessages } from 'react-intl';

const messages = defineMessages({
  assetsDropZoneAriaLabel: {
    id: 'assetsDropZoneAriaLabel',
    defaultMessage: 'Tải tài nguyên lên',
    description: 'Aria label for screenreaders on the upload region of the page',
  },
  assetsDropZoneBrowseLabel: {
    id: 'assetsDropZoneBrowseLabel',
    defaultMessage: 'Duyệt tệp từ máy tính',
    description: 'Upload label for the "Browse" button',
  },
  assetsDropZoneHeader: {
    id: 'assetsDropZoneHeader',
    defaultMessage: 'Kéo và thả',
    description: 'Upload with dropzone section heading',
  },
  assetsDropZoneMaxFileSizeLabel: {
    id: 'assetsDropZoneMaxFileSizeLabel',
    defaultMessage: 'Dung lượng tệp tối đa: {maxFileSizeMB} MB',
    description: 'Upload label for maximum file size',
  },
});

export default messages;

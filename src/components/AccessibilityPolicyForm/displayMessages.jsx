import { defineMessages } from 'react-intl';

const messages = defineMessages({
  accessibilityPolicyFormEmailLabel: {
    id: 'accessibilityPolicyFormEmailLabel',
    defaultMessage: 'Địa chỉ email',
    description: 'Label for the email form field',
  },
  accessibilityPolicyFormError: {
    id: 'accessibilityPolicyFormError',
    defaultMessage: 'Lỗi',
    description: 'Error message for screen-reader text',
  },
  accessibilityPolicyFormErrorHighVolume: {
    id: 'accessibilityPolicyFormErrorHighVolume',
    defaultMessage: 'Hiện tại chúng tôi đang gặp phải lưu lượng cao. Vui lòng thử lại sau trong ngày hôm nay hoặc gửi email đến {emailLink}.',
    description: 'Error message when site is experiencing high volume that will include an email link',
  },
  accessibilityPolicyFormErrorMissingFields: {
    id: 'accessibilityPolicyFormErrorMissingFields',
    defaultMessage: 'Hãy chắc chắn điền đầy đủ tất cả các trường.',
    description: 'Error message to instruct user to fill in all fields',
  },
  accessibilityPolicyFormFieldsRequired: {
    id: 'accessibilityPolicyFormFieldsRequired',
    defaultMessage: 'Tất cả các trường đều là bắt buộc.',
    description: 'Instructions at the top of the form telling the user to fill in all fields',
  },
  accessibilityPolicyFormHeader: {
    id: 'accessibilityPolicyFormHeader',
    defaultMessage: 'Phản hồi về khả năng truy cập Studio',
    description: 'The heading for the form',
  },
  accessibilityPolicyFormMessageLabel: {
    id: 'accessibilityPolicyFormMessageLabel',
    defaultMessage: 'Tin nhắn',
    description: 'Label for the message form field',
  },
  accessibilityPolicyFormNameLabel: {
    id: 'accessibilityPolicyFormNameLabel',
    defaultMessage: 'Tên',
    description: 'Label for the name form field',
  },
  accessibilityPolicyFormSubmitAria: {
    id: 'accessibilityPolicyFormSubmitAria',
    defaultMessage: 'Gửi mẫu phản hồi về khả năng truy cập',
    description: 'Detailed aria-label for the submit button',
  },
  accessibilityPolicyFormSubmitLabel: {
    id: 'accessibilityPolicyFormSubmitLabel',
    defaultMessage: 'Phản hồi',
    description: 'General label for the submit button',
  },
  accessibilityPolicyFormSubmittingFeedbackLabel: {
    id: 'accessibilityPolicyFormSubmittingFeedbackLabel',
    defaultMessage: 'Đang gửi phản hồi',
    description: 'Loading message while form feedback is being submitted',
  },
  accessibilityPolicyFormSuccess: {
    id: 'accessibilityPolicyFormSuccess',
    defaultMessage: 'Cảm ơn bạn đã liên hệ với edX!',
    description: 'Simple thank you message when form submission is successful',
  },
  accessibilityPolicyFormSuccessDetails: {
    id: 'accessibilityPolicyFormSuccessDetails',
    defaultMessage: 'Cảm ơn bạn đã phản hồi về tính khả dụng của Studio. Chúng tôi thường phản hồi trong vòng một ngày làm việc ({day_start} đến {day_end}, {time_start} đến {time_end}).',
    description: 'Detailed thank you message when form submission is successful',
  },
  accessibilityPolicyFormValidEmail: {
    id: 'accessibilityPolicyFormValidEmail',
    defaultMessage: 'Vui lòng nhập một địa chỉ email hợp lệ.',
    description: 'Error message for when an invalid email is entered into the form',
  },
  accessibilityPolicyFormValidMessage: {
    id: 'accessibilityPolicyFormValidMessage',
    defaultMessage: 'Vui lòng nhập một tin nhắn.',
    description: 'Error message an invalid message is entered into the form',
  },
  accessibilityPolicyFormValidName: {
    id: 'accessibilityPolicyFormValidName',
    defaultMessage: 'Vui lòng nhập tên.',
    description: 'Error message an invalid name is entered into the form',
  },
});

export default messages;

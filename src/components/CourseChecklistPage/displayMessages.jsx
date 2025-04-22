import { defineMessages } from 'react-intl';

const messages = defineMessages({
  launchChecklistLabel: {
    id: 'launchChecklistLabel',
    defaultMessage: 'Danh sách kiểm tra khi xuất bản',
    description: 'Header text for a checklist that describes actions to have completed before a course should launch',
  },
  bestPracticesChecklistLabel: {
    id: 'bestPracticesChecklistLabel',
    defaultMessage: 'Danh sách kiểm tra các phương pháp hay nhất',
    description: 'Header text for a checklist that describes best practices for a course',
  },
  launchChecklistLoadingLabel: {
    id: 'doneLoadingChecklistStatusLabel',
    defaultMessage: 'Dữ liệu danh sách kiểm tra khởi chạy đang được tải.',
    description: 'Label telling the user that the Launch Checklist is loading',
  },
  launchChecklistDoneLoadingLabel: {
    id: 'launchChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu danh sách kiểm tra khởi chạy đã hoàn tất tải.',
    description: 'Label telling the user that the Launch Checklist is done loading',
  },
  bestPracticesChecklistLoadingLabel: {
    id: 'bestPracticesChecklistLoadingLabel',
    defaultMessage: 'Dữ liệu danh sách kiểm tra các phương pháp hay nhất đang tải.',
    description: 'Label telling the user that the Best Practices Checklist is loading',
  },
  bestPracticesChecklistDoneLoadingLabel: {
    id: 'bestPracticesChecklistDoneLoadingLabel',
    defaultMessage: 'Dữ liệu danh sách kiểm tra các phương pháp hay nhất đã tải xong',
    description: 'Label telling the user that the Best Practices Checklist is done loading',
  },
});

export default messages;

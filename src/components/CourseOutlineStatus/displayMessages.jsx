import { defineMessages } from 'react-intl';

const messages = defineMessages({
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} hoàn thành',
    description: 'Label that describes how many tasks have been completed out of a total number of tasks',
  },
  checklistsStatusLabel: {
    id: 'checklistsStatusLabel',
    defaultMessage: 'Danh sách kiểm tra',
    description: 'Label for a section that describes a checklist',
  },
  checklistStatusLoadingLabel: {
    id: 'checklistStatusLoadingLabel',
    defaultMessage: 'Danh sách kiểm tra đang tải',
    description: 'Label telling the user that a checklist status is loading',
  },
  checklistStatusDoneLoadingLabel: {
    id: 'checklistStatusDoneLoadingLabel',
    defaultMessage: 'Dữ liệu danh sách kiểm tra đã tải xong.',
    description: 'Label telling the user that a checklist status is done loading',
  },
  loadingIconLabel: {
    id: 'loadingIconLabel',
    defaultMessage: 'Đang tải',
    description: 'Label for a loading icon',
  },
  startDateStatusLabel: {
    id: 'startDateStatusLabel',
    defaultMessage: 'Ngày bắt đầu',
    description: 'Header text for a section that describe\'s the date a course starts',
  },
  pacingTypeStatusLabel: {
    id: 'pacingTypeStatusLabel',
    defaultMessage: 'Loại tiến độ',
    description: 'Header text for a section that describe\'s the pacing type of a course',
  },
  pacingTypeInstructorPaced: {
    id: 'pacingTypeInstructorPaced',
    defaultMessage: 'Có hướng dẫn',
    description: 'Text that describe\'s a course that follows a schedule set by an instructor',
  },
  pacingTypeSelfPaced: {
    id: 'pacingTypeSelfPaced',
    defaultMessage: 'Tự học',
    description: 'Text that describe\'s a course that does not have a set schedule',
  },
});

export default messages;

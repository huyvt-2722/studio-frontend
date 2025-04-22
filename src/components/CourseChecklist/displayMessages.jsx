import { defineMessages } from 'react-intl';

const messages = defineMessages({
  welcomeMessageShortDescription: {
    id: 'welcomeMessageShortDescription',
    defaultMessage: 'Thêm tin nhắn chào mừng',
    description: 'Label for a section that describes a welcome message for a course',
  },
  welcomeMessageLongDescription: {
    id: 'welcomeMessageLongDescription',
    defaultMessage: 'Chào đón học viên vào khóa học của bạn và chuẩn bị cho học viên một trải nghiệm khóa học tích cực.',
    description: 'Description for a section that prompts a user to enter a welcome message for a course',
  },
  gradingPolicyShortDescription: {
    id: 'gradingPolicyShortDescription',
    defaultMessage: 'Tạo Chính Sách Chấm Điểm Khóa Học Của Bạn',
    description: 'Label for a section that describes a grading policy for a course',
  },
  gradingPolicyLongDescription: {
    id: 'gradingPolicyLongDescription',
    defaultMessage: 'Xây Dựng Chính Sách Chấm Điểm Của Bạn, Bao Gồm Các Loại Bài Tập và Điểm Đậu. Tất Cả Các Bài Tập Tổng Cộng Thành 100%.',
    description: 'Description for a section that prompts a user to enter a grading policy for a course',
  },
  gradingPolicyComment: {
    id: 'gradingPolicyComment',
    defaultMessage: 'Chính sách chấm điểm hiện tại của bạn tổng cộng là {percent}%.',
    description: 'Description for a section that displays a course\'s grading policy total',
  },
  certificateShortDescription: {
    id: 'certificateShortDescription',
    defaultMessage: 'Kích hoạt Chứng chỉ của bạn',
    description: 'Label for a section that describes a certificate for completing a course',
  },
  certificateLongDescription: {
    id: 'certificateLongDescription',
    defaultMessage: 'Hãy chắc chắn rằng tất cả văn bản đã chính xác, các chữ ký đã được tải lên, và chứng chỉ đã được kích hoạt.',
    description: 'Description for a section that prompts a user to create a course completion certificate',
  },
  courseDatesShortDescription: {
    id: 'courseDatesShortDescription',
    defaultMessage: 'Thiết lập các ngày quan trọng của khóa học.',
    description: 'Label for a section that describes a certificate for completing a course',
  },
  courseDatesLongDescription: {
    id: 'courseDatesLongDescription',
    defaultMessage: 'Thiết lập lịch trình khóa học của bạn, bao gồm thời gian bắt đầu và kết thúc khóa học.',
    description: 'Description for a section that prompts a user to set up a course schedule',
  },
  assignmentDeadlinesShortDescription: {
    id: 'assignmentDeadlinesShortDescription',
    defaultMessage: 'Xác nhận thời hạn nộp bài tập',
    description: 'Label for a section that describes course assignment deadlines',
  },
  assignmentDeadlinesLongDescription: {
    id: 'assignmentDeadlinesLongDescription',
    defaultMessage: 'Đảm bảo tất cả thời hạn nộp bài tập nằm trong khoảng thời gian bắt đầu và kết thúc của khóa học.',
    description: 'Description for a section that prompts a user to enter course assignment deadlines',
  },
  assignmentDeadlinesComment: {
    id: 'assignmentDeadlinesComment',
    defaultMessage: 'hững bài tập sau có thời hạn không nằm trong khoảng thời gian bắt đầu và kết thúc của khóa học:',
    description: 'Description for a section that displays which assignments are outside of a course\'s start and end date',
  },
  videoDurationShortDescription: {
    id: 'videoDurationShortDescription',
    defaultMessage: 'Kiểm tra Thời gian Video',
    description: 'Label for a section that describes video durations',
  },
  videoDurationLongDescription: {
    id: 'videoDurationLongDescription',
    defaultMessage: 'Học viên tham gia tốt nhất với các video ngắn, sau đó là cơ hội thực hành. Đảm bảo rằng 80% hoặc hơn các video của khóa học có thời gian dưới 10 phút.',
    description: 'Description for a section that prompts a user to follow best practices for video length',
  },
  mobileFriendlyVideoShortDescription: {
    id: 'mobileFriendlyVideoShortDescription',
    defaultMessage: 'Tạo video thân thiện với thiết bị di động',
    description: 'Label for a section that describes mobile friendly videos',
  },
  mobileFriendlyVideoLongDescription: {
    id: 'mobileFriendlyVideoLongDescription',
    defaultMessage: 'Các video thân thiện với thiết bị di động có thể được xem trên tất cả các thiết bị được hỗ trợ. Đảm bảo rằng ít nhất 90% video trong khóa học của bạn là thân thiện với di động bằng cách tải video của khóa học lên hệ thống video của edX.',
    description: 'Description for a section that prompts a user to follow best practices for mobile friendly videos',
  },
  diverseSequencesShortDescription: {
    id: 'diverseSequencesShortDescription',
    defaultMessage: 'Xây dựng các chuỗi học tập đa dạng',
    description: 'Label for a section that describes diverse sequences of educational content',
  },
  diverseSequencesLongDescription: {
    id: 'diverseSequencesLongDescription',
    defaultMessage: 'Nghiên cứu cho thấy trải nghiệm nội dung đa dạng thúc đẩy sự tham gia của người học. Chúng tôi khuyến nghị rằng 80% hoặc hơn các chuỗi học tập hoặc phân mục học của bạn bao gồm nhiều loại nội dung (chẳng hạn như video, thảo luận hoặc bài tập).',
    description: 'Description for a section that prompts a user to follow best practices diverse sequences of educational content',
  },
  weeklyHighlightsShortDescription: {
    id: 'weeklyHighlightsShortDescription',
    defaultMessage: 'Thiết lập Điểm Nổi Bật Hàng Tuần',
    description: 'Label for a section that describes weekly highlights',
  },
  weeklyHighlightsLongDescription: {
    id: 'weeklyHighlightsLongDescription',
    defaultMessage: 'Kích hoạt và chỉ định các điểm nổi bật hàng tuần để giữ học viên tham gia và theo dõi tiến độ trong khóa học của bạn.',
    description: 'Description for a section that prompts a user to follow best practices for course weekly highlights',
  },
  unitDepthShortDescription: {
    id: 'unitDepthShortDescription',
    defaultMessage: 'Quản lý độ sâu',
    description: 'Label for a section that describes course unit depth',
  },
  unitDepthLongDescription: {
    id: 'unitDepthLongDescription',
    defaultMessage: 'Việc chia nhỏ nội dung khóa học thành các phần dễ quản lý giúp tăng cường sự tham gia của người học. Chúng tôi khuyến nghị mỗi đơn vị không chứa quá ba thành phần.',
    description: 'Description for a section that prompts a user to follow best practices for course unit depth',
  },
  updateLinkLabel: {
    id: 'updateLinkLabel',
    defaultMessage: 'Cập nhật',
    description: 'Label for a link that takes the user to a page where they can update settings',
  },
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} hoàn thành',
    description: 'Label that describes how many tasks have been completed out of a total number of tasks',
  },
  completedItemLabel: {
    id: 'completedItemLabel',
    defaultMessage: 'hoàn thành',
    description: 'Label that describes a completed task',
  },
  uncompletedItemLabel: {
    id: 'uncompletedItemLabel',
    defaultMessage: 'chưa hoàn thành',
    description: 'Label that describes an uncompleted task',
  },
  loadingChecklistLabel: {
    id: 'loadingChecklistLabel',
    defaultMessage: 'Đang tải',
    description: 'Label telling the user that a checklist is loading',
  },
});

export default messages;

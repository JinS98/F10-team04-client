import * as yup from "yup";

export const schema = yup.object({
  content: yup.string().required("내용은 필수 입력입니다."),
});

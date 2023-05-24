export const Messages = {
  COMMON_1: 'موفقیت آمیز',
  COMMON_2: 'اطلاعات با موفقیت دریافت شد',
  COMMON_3: 'ثبت با موفقیت انجام شد',
  COMMON_4: 'ایتم مورد نظر حذف شد',
  COMMON_5: 'ویرایش با موفقیت انجام شد',
  USER_AUTH_1: 'کد ورود به ایمیل شما ارسال شد',
  USER_AUTH_2: 'کاربر با موفقیت وارد شد',
};

export default class HttpSuccess {
  constructor({ res, statusCode = 200, message = null, data = null }) {
    this.res = res;
    this.statusCode = statusCode;
    this.message = message
    this.data = data

    this.sendResponse()
  }

  sendResponse() {
    this.checkStatusCode()
    this.res.status(this.statusCode).send({ message: this.message, data: this.data }).end()
  }

  checkStatusCode() {
    if (this.statusCode !== 200 || this.statusCode !== 201) this.statusCode = 200
  }
} 
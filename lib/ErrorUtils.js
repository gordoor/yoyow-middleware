module.exports = {
  formatError(e) {
    if (e.message.indexOf('last_post_sequence') >= 0)
      e = {code: 3001, message: '文章ID必须为该平台该发文人的上一篇文章ID +1'};
    else if (e.message.indexOf('Missing Secondary Authority') >= 0)
      e = {code: 1007, message: `未授权该平台`};
    else if (e.message.indexOf('less than required') >= 0)
      e = {code: 2004, message: `零钱和积分不足支付操作手续费`};

    return e;
  },
  not_exists_error: function (message = '') {
    return {
      code: 404,
      message: 'resource not exists.' + message
    }
  },
  params_missing_error: function (message = '') {
    return {
      code: 405,
      message: 'parameters required: ' + message
    }
  }
};
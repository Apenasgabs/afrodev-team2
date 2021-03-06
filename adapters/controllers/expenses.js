const expenseService = require('../../application/services/expenses');

exports.post = async (request) => {
  const result = await expenseService.register(request.body);
  return result;
};
exports.get = async (request) => {
  const result = await expenseService.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await expenseService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await expenseService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await expenseService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await expenseService.delete(id);
  return result;
};

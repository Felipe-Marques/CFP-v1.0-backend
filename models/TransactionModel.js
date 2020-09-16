export default (mongoose) => {
  const schema = mongoose.Schema({
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate: (value) => {
        if (value < 0) throw new Error('Valor negativo não permitido.');
      },
    },
    category: {
      type: String,
      required: true,
    },
    year: Number,
    month: Number,
    day: Number,
    yearMonth: String,
    yearMonthDay: { type: String, required: true },
    type: { type: String, required: true },
  });

  const TransactionModel = mongoose.model('transaction', schema);

  return TransactionModel;
};

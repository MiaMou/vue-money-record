type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: Date; // 除了写 基本数据类型 ，还可以写 类
};

const localStorageKeyName = "recordList";
const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    // 获取数据
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordItem[];
    return this.data;
  },
  save() {
    // 保存数据
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default recordListModel;

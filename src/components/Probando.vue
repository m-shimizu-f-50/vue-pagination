<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="displayItems"
          　hide-default-footer
        >
          <template v-slot:[`item.delete`]="{ item }">
            <v-btn small color="error" @click="deleteItem(item)"> 削除 </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <div class="table-footer text-center pt-2">
      <span>全 1件</span>
      <v-pagination
        v-model="page"
        class="ml-4"
        circle
        :length="pageCount"
        @input="pageChange"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "名前",
          value: "name",
        },
        { text: "メルアド", value: "email" },
        {
          text: "削除",
          value: "delete",
          sortable: false,
        },
      ],

      // page ・・・現在のページの場所を表している
      // pageCount・・・ページの数を表している
      // pageSize・・・1ページに表示させるサイズを設定
      // serverDatas・・・APIから取得したデータを格納する
      // displayItems・・・itemsから抽出した実際に画面に表示させるitemsを格納する
      serverDatas: [],

      displayItems: [],
      page: 1,
      pageCount: 1,
      pageSize: 5,
    };
  },

  methods: {
    deleteItem(item) {
      const index = this.serverDatas.indexOf(item);
      window.confirm("本当に削除しますか") && this.serverDatas.splice(index, 1);
    },
    pageChange(pageNumber) {
      this.displayItems = this.serverDatas.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.serverDatas = res.data;
        // ページネーションの各値を更新
        this.displayItems = this.serverDatas.slice(0, this.pageSize);
        this.totalCount = this.serverDatas.length;
        this.pageCount = Math.ceil(this.serverDatas.length / this.pageSize);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("通信完了");
      });
  },
};
</script>
<style lang="scss" scoped>
.table-footer {
  display: flex;
  bottom: 0;
  padding: 10px;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>
<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-data-table :headers="headers" :items="serverDatas">
          <template v-slot:[`item.delete`]="{ item }">
            <v-btn small color="error" @click="deleteItem(item)"> 削除 </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
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
      serverDatas: [],

      items: [
        {
          id: 1,
          name: "高田健志",
          age: 33,
        },
        {
          id: 2,
          name: "横山緑",
          age: 42,
        },
        {
          id: 3,
          name: "山田太郎",
          age: 10,
        },
      ],
    };
  },

  methods: {
    deleteItem(item) {
      const index = this.serverDatas.indexOf(item);
      window.confirm("ガチで削除しますか") && this.serverDatas.splice(index, 1);
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.serverDatas = res.data;
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
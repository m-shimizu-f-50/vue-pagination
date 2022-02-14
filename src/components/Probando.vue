<template>
  <div id="app">
    <h1>Componente Probando</h1>
    <v-select :options="provincias"></v-select>
    <v-data-table
      striped
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="5"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
    <v-pagination v-model="page" :length="2"></v-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      headers: [
        {
          text: "Nombre",
          align: "start",
          sortable: true,
          value: "nombre",
        },
        { text: "Apellidos", value: "apellidos" },
        { text: "Edad", value: "edad" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      items: [
        { nombre: "Juan Ramón", apellidos: "Perez", edad: 34 },
        { nombre: "Manuel", apellidos: "Roma", edad: 24 },
        { nombre: "Sara", apellidos: "Vázquez", edad: 54 },
        { nombre: "Mónica", apellidos: "Tui", edad: 20 },
        { nombre: "Raúl", apellidos: "Tui", edad: 20 },
        { nombre: "Federico", apellidos: "Tui", edad: 20 },
        { nombre: "Moncho", apellidos: "Tui", edad: 20 },
      ],
      provincias: ["coruña", "Pontevedra"],
    };
  },
  methods: {
    editItem(item) {
      console.log("Editando");
    },
    deleteItem(item) {
      console.log("Borrando");
    },
  },
};
</script>
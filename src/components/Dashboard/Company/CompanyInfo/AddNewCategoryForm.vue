<template>
  <v-form ref="addNewCategoryForm">
    <v-row justify="end">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-3"
            depressed
            color="pallete4"
            v-bind="attrs"
            v-on="on"
          >
            <span class="text-h6">افزودن دسته‌بندی جدید</span>
            <v-icon class="mr-1">mdi-shape-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h4 ma-4 mb-0 font-weight-bold new-categroy-title"
              >افزودن دسته‌بندی جدید</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="category.name"
                    label="عنوان دسته‌بندی *"
                    :rules="[
                      (value) => !!value || 'فیلد عنوان دسته‌بندی الزامی است',
                    ]"
                    prepend-inner-icon="mdi-shape-plus"
                    color="pallete2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="category.extraText"
                    label="توضیحات دسته‌بندی"
                    color="pallete2"
                    prepend-inner-icon="mdi-text-long"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mr-4 mt-n4 pb-4">
            <v-btn color="red darken-1 text-h6" dark @click="cancelAddCategory()">
              انصراف
            </v-btn>
            <v-btn color="green darken-1 text-h6" dark @click="addCategory()">
              ثبت
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "AddNewCategoryForm",
  data() {
    return {
      dialog: false,
      category: {
        name: "",
        extraText: "",
      },
    };
  },
  methods: {
    cancelAddCategory() {
      this.dialog = false;
    },
    addCategory() {
      if (this.$refs.addNewCategoryForm.validate()) {
        this.dialog = false;
      } else {
        this.$refs.addNewCategoryForm.validate();
      }
    },
  },
};
</script>

<style scoped>
.new-categroy-title {
  color: #5fb7e4;
}
</style>

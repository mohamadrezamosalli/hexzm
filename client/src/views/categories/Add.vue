<template>
    <div>
        <v-card>
            <!-- title -->
            <v-card-title>
                <h2>Add a New Category</h2>
            </v-card-title>

            <v-card-text>
                <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddCategory" class="px-3">
                    <!-- title field -->
                    <v-text-field v-model="title" :rules="titleRules" label="Title" prepend-icon="title"></v-text-field>
                    
                    <!-- url field -->
                    <v-text-field v-model="url" :rules="urlRules" label="Url"></v-text-field>
                    
                    <v-spacer></v-spacer>
                    
                    <!-- submit button -->
                    <v-btn :loading="loading" :disabled="!isFormValid || loading" color="success" class="mt-3 mr-1" type="submit">
                        Save
                        <span slot="loader">Loading...</span>
                    </v-btn>

                    <!-- back button -->
                    <v-btn router to="/admin/categories" class="mt-3 mx-1">Back</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'addCategory',
    data() {
        return {
            title: '',
            url: '',
            titleRules: [title => !!title.trim() || 'Title is required'],
            urlRules: [url => !!url.trim() || 'Url is required'],
            isFormValid: true
        }
    },
    computed: {
        ...mapGetters(['loading'])
    },
    methods: {
        handleAddCategory(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('addCategory', {
                    title: this.title,
                    url: this.url
                });
            }
        }
    }
}
</script>
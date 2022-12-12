<template>
  <v-app>
    <v-system-bar color="primary">

    </v-system-bar>

    <v-app-bar app color="primary">
      <v-btn text to="/home">Главная</v-btn>
      <v-btn text to="/about">О нас</v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <v-card max-width="400" class="mx-auto">
              <v-system-bar color="pink darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-app-bar dark color="pink">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Заголовок</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-app-bar>

              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card color="#385F73" dark>
                      <v-card-title class="text-h5">
                        Текст карточки
                      </v-card-title>

                      <v-card-subtitle></v-card-subtitle>

                      <v-card-actions>
                        <v-btn text>
                          Кнопка
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card :color="item.color" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                          <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                          <v-card-actions>
                            <v-btn v-if="item.artist === 'Ellie Goulding'" class="ml-2 mt-3" fab icon height="40px"
                              right width="40px">
                              <v-icon>mdi-play</v-icon>
                            </v-btn>

                            <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                              START RADIO
                            </v-btn>
                          </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col v-if="this.$vuetify.breakpoint.name == 'xl' || this.$vuetify.breakpoint.name == 'lg'">
            <v-card max-width="400" class="mx-auto">
              <v-system-bar color="pink darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-app-bar dark color="pink">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Заголовок</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-app-bar>

              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card color="#385F73" dark>
                      <v-card-title class="text-h5">
                        Текст карточки
                      </v-card-title>

                      <v-card-subtitle></v-card-subtitle>

                      <v-card-actions>
                        <v-btn text>
                          Кнопка
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card :color="item.color" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                          <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                          <v-card-actions>
                            <v-btn v-if="item.artist === 'Ellie Goulding'" class="ml-2 mt-3" fab icon height="40px"
                              right width="40px">
                              <v-icon>mdi-play</v-icon>
                            </v-btn>

                            <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                              START RADIO
                            </v-btn>
                          </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-6">
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Calories
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>

      </v-container>
    </v-content>

  </v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
};
</script>

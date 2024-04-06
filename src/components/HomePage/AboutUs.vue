<template>
  <section class="about-us--section" id="about-us">
    <v-container fluid class="mt-2">
      <v-row align="center" justify="space-around">
        <v-col cols="12">
          <div class="about-goal-card">
            <v-row>
              <v-col cols="6" sm=12 lg="6" class="about-content">
                <v-card-title class="about-title">{{ $t("aboutUs.title") }}</v-card-title>
                <v-card-text>
                  <p class="about-text">
                    {{ $t("aboutUs.text") }}
                  </p>
                  <v-row>
                    <v-col cols="6" sm="12" lg="6">
                      <ul class="goal-list">
                        <li>
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"
                                 fill="none">
                              <path
                                  d="M10.49 2.23006L5.50003 4.11006C4.35003 4.54006 3.41003 5.90006 3.41003 7.12006V14.5501C3.41003 15.7301 4.19003 17.2801 5.14003 17.9901L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path d="M9.05005 11.8701L10.66 13.4801L14.96 9.18005" stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div class="content">
                            <h4>{{ $t("aboutUs.highQuality") }}</h4>
                            <p>
                              {{ $t("aboutUs.highQualityText") }}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"
                                 fill="none">
                              <path
                                  d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
                                  stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path
                                  d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path
                                  d="M16.04 13.76V8.05003C16.04 7.79003 15.87 7.55997 15.62 7.48997C15.37 7.41997 15.1 7.51997 14.96 7.73997C14.24 8.89997 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.3199 13.33 12.3199H17"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div class="content">
                            <h4>{{ $t("aboutUs.support") }}</h4>
                            <p>
                              {{ $t("aboutUs.supportText") }}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </v-col>
                    <v-col cols="6" sm="12" lg="6">
                      <ul class="goal-list">
                        <li>
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"
                                 fill="none">
                              <path
                                  d="M10.49 2.23006L5.50003 4.10006C4.35003 4.53006 3.41003 5.89006 3.41003 7.12006V14.5501C3.41003 15.7301 4.19005 17.2801 5.14005 17.9901L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path
                                  d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z"
                                  stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5"
                                    stroke="currentColor"
                                    stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div class="content">
                            <h4>{{ $t("aboutUs.longTerm") }}</h4>
                            <p>
                              {{ $t("aboutUs.longTermText") }}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"
                                 fill="none">
                              <path d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"
                                    stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path
                                  d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path
                                  d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path
                                  d="M4.82999 19.92C6.36534 19.92 7.60999 18.6753 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6753 3.29464 19.92 4.82999 19.92Z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                              <path
                                  d="M19.17 19.92C20.7054 19.92 21.95 18.6753 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6753 17.6347 19.92 19.17 19.92Z"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div class="content">
                            <h4>{{ $t("aboutUs.jointActivities") }}</h4>
                            <p>
                              {{ $t("aboutUs.jointActivitiesText") }}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="6" sm=12 lg="6">
                <img class="about-image" width="500" src="../../assets/images/aboutUs.jpeg"
                     alt="about us pic">
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>
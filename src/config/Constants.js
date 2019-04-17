import AxiosConfig from '../config/AxiosConfig';
export const nameRegex = /^[a-z]+$/i;
export const passwordRegex = /^[\S]{8,}$/;
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//export const KEY = 'AIzaSyCjgxwU5P7sYX1cSopF5N4CcXKxlstbQXA';
export const KEY = 'AIzaSyAJZsks_t02ZRf9B4v8WGSCVS32HC0ufb0';
export const baseURL = 'https://www.googleapis.com/youtube/v3';
export const categoryNames = ['Movies', 'Music', 'Game', 'Funny Videos', 'Series'];

export const response = {
       "kind": "youtube#searchListResponse",
       "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/-xy-0kx3hj1kE5mX9y5IbunQkh4\"",
       "nextPageToken": "CAoQAA",
       "regionCode": "IN",
       "pageInfo": {
              "totalResults": 1000000,
              "resultsPerPage": 10
       },
       "items": [
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/j0uEstXCXOhrDqDegEBmEeHqsBM\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "YQHsXMglC9A"
                     },
                     "snippet": {
                            "publishedAt": "2015-10-23T06:54:18.000Z",
                            "channelId": "UComP_epzeKzvBX156r6pm1Q",
                            "title": "Adele - Hello",
                            "description": "'Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "AdeleVEVO",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/iuqVuZQPuXLdzLooeOJu3HtoqT0\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "5NsZ5MiXWvM"
                     },
                     "snippet": {
                            "publishedAt": "2018-07-13T16:24:41.000Z",
                            "channelId": "UCkvWlsTswUtMVrEzlu-1sVg",
                            "title": "Learn Colors Hello Kitty Dough with Ocean Tools and Cookie Molds Surprise Toys Kinder Eggs",
                            "description": "Subscribe to YL Toys Collection: https://www.youtube.com/channel/UCkvWlsTswUtMVrEzlu-1sVg?sub_confirmation=1' Popular videos: ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/5NsZ5MiXWvM/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/5NsZ5MiXWvM/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/5NsZ5MiXWvM/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "YL Toys Collection",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/M17maPKVRl1PXf5apE3HmhPJasU\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "uacyVe_ZSoc"
                     },
                     "snippet": {
                            "publishedAt": "2019-02-19T23:02:01.000Z",
                            "channelId": "UCjZ-Ekz7JDN6GDXwusvSHvg",
                            "title": "Sasha play with New Hello Kitty Bus and sing a Song",
                            "description": "Sasha and Max playing with blue big bus. But one bus is not enough for two kids. Sasha found New Kitty Bus, and children play together and sing Bus Song ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/uacyVe_ZSoc/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/uacyVe_ZSoc/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/uacyVe_ZSoc/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Smile Toys Review",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/EcWVTQcOMS1-mDgZgm8cBti1-Lo\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "fxVMqaViVaA"
                     },
                     "snippet": {
                            "publishedAt": "2019-02-05T08:00:07.000Z",
                            "channelId": "UCbCmjCuTUZos6Inko4u57UQ",
                            "title": "Hello Song | CoCoMelon Nursery Rhymes &amp; Kids Songs",
                            "description": "JJ has met some new friends at preschool! Let's sing along and meet them too! Subscribe for new videos every week: ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/fxVMqaViVaA/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/fxVMqaViVaA/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/fxVMqaViVaA/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Cocomelon - Nursery Rhymes",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/AsMRDEwBj2TRqKAJL03Y0cxqaRE\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "oKz7Lg8tbpg"
                     },
                     "snippet": {
                            "publishedAt": "2019-04-07T09:04:47.000Z",
                            "channelId": "UCisLUrum0ZIFW_s8ChanHMQ",
                            "title": "Karavanla Seyahat - İznik ve Gölünde Kamp - Hello People Van Life #18",
                            "description": "Atlas'a iyice uyum sağlamaya başladık. Gittiğimiz yerlerde çok keyif veriyor bize iyi ki yapmışız karavan dedirtiyor her seferinde. Bu seyahatimiz de Göl var, Tarih ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/oKz7Lg8tbpg/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/oKz7Lg8tbpg/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/oKz7Lg8tbpg/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Hello People",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/N7FA3SUWQ_jVm3-888TZqY4umco\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "mv326-zVpAQ"
                     },
                     "snippet": {
                            "publishedAt": "2017-05-17T05:30:04.000Z",
                            "channelId": "UCopY0NAzASqmD6eVaRj2TFQ",
                            "title": "New Punjabi Songs 2017-Hello Hello(Ful Song)-Prince Narula-Yuvika Chaudhary-Latest Punjabi Song 2017",
                            "description": "New Punjabi Song 2017-Hello Hello(Full Song)-Prince Narula-Yuvika Chaudhary-Latest Punjabi Song 2017 A WHITE HILL MUSIC Presentation Produced by ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/mv326-zVpAQ/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/mv326-zVpAQ/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/mv326-zVpAQ/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "White Hill Music",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/7edFDUiXbiPY2A5gw1T1LoQhb_k\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "vb3rQ9VDRKc"
                     },
                     "snippet": {
                            "publishedAt": "2018-06-15T13:01:47.000Z",
                            "channelId": "UCKA8af7IMMItFjqrYO9KgfQ",
                            "title": "Yevevo Video Song || Hello Video Songs || Akhil Akkineni, Kalyani Priyadarshan",
                            "description": "Watch & Enjoy Yevevo Full Video Song, Starring #AkhilAkkineni, #KalyaniPriyadarshan. Directed by #VikramKKumar, Music Composed By #AnupRubens, ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/vb3rQ9VDRKc/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/vb3rQ9VDRKc/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/vb3rQ9VDRKc/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Annapurna Studios",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/zQczueJKpPWHmbS_9I8O6rDZACg\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "zcmDonAMyR4"
                     },
                     "snippet": {
                            "publishedAt": "2016-06-09T01:09:03.000Z",
                            "channelId": "UCrG1w1ipVo1CruTd1uS9AxQ",
                            "title": "Голос пародия приколы. Мечта сбылась, я прошел на ГОЛОС! :) Adele - Hello (Cover)",
                            "description": "Наконец-то, после многих, долгих лет мытарств, ожиданий, заявок и тренировок, я попал на проект Голос (TheVoice)....",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/zcmDonAMyR4/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/zcmDonAMyR4/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/zcmDonAMyR4/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Archie M",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/wVCYLgzEi9sJonhbcrSDPWjOzO4\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "iEL236uz_58"
                     },
                     "snippet": {
                            "publishedAt": "2017-09-02T15:42:11.000Z",
                            "channelId": "UCPyR-XdZR6mEGuUJipf3MAg",
                            "title": "Hello - Dương Ngọc Ánh | Tập 4 Vòng Giấu Mặt | Giọng Hát Việt Nhí 2017",
                            "description": "Thần tượng nữ ca sĩ Adele nên cô bé để thể hiện \"Hello\" khiến cả trường quay phải lắng đọng ngay từ câu hát đầu tiên, và bằng chất giọng nội...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/iEL236uz_58/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/iEL236uz_58/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/iEL236uz_58/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Giọng Hát Việt Nhí / The Voice Kids Vietnam",
                            "liveBroadcastContent": "none"
                     }
              },
              {
                     "kind": "youtube#searchResult",
                     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/gG_3PzLJutpZrntMTrA1AlGd330\"",
                     "id": {
                            "kind": "youtube#video",
                            "videoId": "fueDesccBuE"
                     },
                     "snippet": {
                            "publishedAt": "2019-03-01T08:00:06.000Z",
                            "channelId": "UCbCmjCuTUZos6Inko4u57UQ",
                            "title": "The Hello Song + More Nursery Rhymes &amp; Kids Songs - CoCoMelonThe Hello Song",
                            "description": "Subscribe for new videos every week! https://www.youtube.com/c/Cocomelon?sub_confirmation=1 A new compilation video, including one of our most recent ...",
                            "thumbnails": {
                                   "default": {
                                          "url": "https://i.ytimg.com/vi/fueDesccBuE/default.jpg",
                                          "width": 120,
                                          "height": 90
                                   },
                                   "medium": {
                                          "url": "https://i.ytimg.com/vi/fueDesccBuE/mqdefault.jpg",
                                          "width": 320,
                                          "height": 180
                                   },
                                   "high": {
                                          "url": "https://i.ytimg.com/vi/fueDesccBuE/hqdefault.jpg",
                                          "width": 480,
                                          "height": 360
                                   }
                            },
                            "channelTitle": "Cocomelon - Nursery Rhymes",
                            "liveBroadcastContent": "none"
                     }
              }
       ]
};

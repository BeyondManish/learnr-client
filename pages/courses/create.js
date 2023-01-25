import { useState } from 'react';
import MainLayout from "../../components/layout/MainLayout";
import { loadYoutubePlaylist } from '../../functions/youtube';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const data = {
  "kind": "youtube#playlistItemListResponse",
  "etag": "lA-FyVP8uDW4ukVjGSRTWbuY6ao",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "Q7xEO_ia2NGNj0yNMSc8_E4gOHA",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC5DQUNERDQ2NkIzRUQxNTY1",
      "snippet": {
        "publishedAt": "2022-09-16T20:24:23Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "HACKING GOOGLE: Series Trailer (:30)",
        "description": "Five elite security teams. Six never-before-told stories. Go behind the scenes with the hacking teams at Google keeping more people safe online than anyone else in the world. Watch the full series → https://g.co/safety/HACKINGGOOGLE\n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5nEyjYn9_LI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5nEyjYn9_LI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5nEyjYn9_LI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5nEyjYn9_LI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/5nEyjYn9_LI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "5nEyjYn9_LI"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "5nEyjYn9_LI",
        "videoPublishedAt": "2022-10-03T10:00:04Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "7MjiA_VdETJsoCAcmtPmoTzkrDs",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC45NDk1REZENzhEMzU5MDQz",
      "snippet": {
        "publishedAt": "2022-10-03T09:26:15Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "EP000: Operation Aurora | HACKING GOOGLE",
        "description": "What happens when a country attacks a company? In 2009, Google found out and cybersecurity was never the same again. // EP000 of the HACKING GOOGLE series → https://g.co/safety/HACKINGGOOGLE\n\nAn inside look at the historic attack where Google’s network was breached by a foreign government trying to access the Gmail accounts of human rights activists. In the wake of the breach, Google revolutionized its approach to security - overhauling everything and developing highly specialized teams of elite experts to stay ahead of the ever-evolving threat landscape. \n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/przDcQe6n5o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/przDcQe6n5o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/przDcQe6n5o/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/przDcQe6n5o/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/przDcQe6n5o/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "przDcQe6n5o"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "przDcQe6n5o",
        "videoPublishedAt": "2022-10-03T09:58:24Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "cI85uLGonvpSqbvFCCYQkvYyA1U",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC5GNjNDRDREMDQxOThCMDQ2",
      "snippet": {
        "publishedAt": "2022-10-03T09:27:26Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "EP001: Threat Analysis Group | HACKING GOOGLE",
        "description": "Watchguards. Lookouts. Sentries. When faced with threats, there have always been those who look out to protect the rest. But who looks out for the threats lurking online? // EP001 of the HACKING GOOGLE series →  https://g.co/safety/HACKINGGOOGLE\n\nEquipped with custom Google Search algorithms and a digital library of the most malicious exploits, the Threat Analysis Group has helped stop some of the most insidious and consequential threats to Google, its users, and the internet at large. Their deep understanding of attackers helps keep billions of users safe.\n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/N7N4EC20-cM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/N7N4EC20-cM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/N7N4EC20-cM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/N7N4EC20-cM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/N7N4EC20-cM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "N7N4EC20-cM"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "N7N4EC20-cM",
        "videoPublishedAt": "2022-10-03T09:58:33Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "j48thYMMuMJQP7FYjGg3h5HxKPU",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC40NzZCMERDMjVEN0RFRThB",
      "snippet": {
        "publishedAt": "2022-10-03T09:28:55Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "EP002: Detection and Response  | HACKING GOOGLE",
        "description": "Meet the internet’s fire department, the elite team that answers the call when chaos ignites online. // EP002 of the HACKING GOOGLE series →  https://g.co/safety/HACKINGGOOGLE\n\nWhen Google’s Detection and Response Team discovers an attacker, they have to be swift and precise. In 2021, they identified unusual network activity, dropped in, isolated the attacker, and booted them off the network – extinguishing a digital fire before it could cause any damage.\n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QZ0cpBocl3c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QZ0cpBocl3c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QZ0cpBocl3c/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/QZ0cpBocl3c/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/QZ0cpBocl3c/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "QZ0cpBocl3c"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "QZ0cpBocl3c",
        "videoPublishedAt": "2022-10-03T09:58:44Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "dpjpVUbTlRfIkKSRpmmis7L_SPY",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC5EMEEwRUY5M0RDRTU3NDJC",
      "snippet": {
        "publishedAt": "2022-10-03T09:29:56Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "EP003: Red Team | HACKING GOOGLE",
        "description": "They have one job: hack Google from the inside. // EP003 of the HACKING GOOGLE series →  https://g.co/safety/HACKINGGOOGLE\n\nGo behind the scenes with the Red Team, the elite hackers dedicated to attacking Google’s own network. They sneak into buildings, launch phishing campaigns, and distribute malware across the company. Countless crucial protections have been created in response to the Red Team’s relentless assault on Google’s products. \n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TusQWn2TQxQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TusQWn2TQxQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TusQWn2TQxQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/TusQWn2TQxQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/TusQWn2TQxQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "TusQWn2TQxQ"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "TusQWn2TQxQ",
        "videoPublishedAt": "2022-10-03T09:59:04Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "YxeMrgelntIyMPDjWfwCTWUEmCI",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC45ODRDNTg0QjA4NkFBNkQy",
      "snippet": {
        "publishedAt": "2022-10-03T09:31:22Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "EP004: Bug Hunters  | HACKING GOOGLE",
        "description": "They’re high schoolers, lawyers, IT professionals, and hobbyists. And they’ve made millions hacking Google in their free time. // EP004 of the HACKING GOOGLE series →  https://g.co/safety/HACKINGGOOGLE\n\nOver the last decade, Google’s Bug Hunter Program has rewarded thousands of people from 84 different countries over $35 million to hunt down over 12,000 bugs in Google products. Their motives vary - cash, clout, curiosity - but their mission is the same: find undiscovered vulnerabilities. \n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IoXiXlCNoXg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IoXiXlCNoXg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IoXiXlCNoXg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/IoXiXlCNoXg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/IoXiXlCNoXg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 5,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "IoXiXlCNoXg"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "IoXiXlCNoXg",
        "videoPublishedAt": "2022-10-03T09:59:14Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "nS3X5GuJ0BZByj_MhYbF_VrkG-o",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC4zMDg5MkQ5MEVDMEM1NTg2",
      "snippet": {
        "publishedAt": "2022-10-03T09:32:25Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "EP005: Project Zero | HACKING GOOGLE",
        "description": "Zero days. They’re some of the world’s most dangerous exploits.  And the race is on to find them before the attackers do. // EP005 of the HACKING GOOGLE series →  https://g.co/safety/HACKINGGOOGLE\n\nGo behind the scenes with Project Zero, a specialized task force devoted to hunting zero day exploits across the internet - in software, hardware, in Google products and beyond. Their work makes them few friends, but finding zero days is essential to ensuring a safe and open internet. \n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/My_13FXODdU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/My_13FXODdU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/My_13FXODdU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/My_13FXODdU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/My_13FXODdU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 6,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "My_13FXODdU"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "My_13FXODdU",
        "videoPublishedAt": "2022-10-03T09:59:54Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "LAmg0Dvno82xpeRCHi591EVEv3o",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC41Mzk2QTAxMTkzNDk4MDhF",
      "snippet": {
        "publishedAt": "2022-10-03T09:33:32Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "Hacking Google to Defend Enterprises",
        "description": "Go behind the scenes with Chief Information Security Officer of Google Cloud, Phil Venables, to meet the people keeping every business, organization, and institution on Google Cloud safe from threats. Part of the HACKING GOOGLE series →  https://g.co/safety/HACKINGGOOGLE\n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dhdz5VZ4S88/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dhdz5VZ4S88/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dhdz5VZ4S88/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/dhdz5VZ4S88/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/dhdz5VZ4S88/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 7,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "dhdz5VZ4S88"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "dhdz5VZ4S88",
        "videoPublishedAt": "2022-10-03T10:00:01Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "5GNwt9LU7jApdTnk8tFJ_p869xU",
      "id": "UEw1OTBMNVdRbUg4ZHN4eHo3b29KQWdtaWp3T3owbGgySC41MzJCQjBCNDIyRkJDN0VD",
      "snippet": {
        "publishedAt": "2022-09-16T20:23:26Z",
        "channelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "title": "HACKING GOOGLE: Series Trailer",
        "description": "Five elite security teams. Six never-before-told stories. Go behind the scenes with the hacking teams at Google keeping more people safe online than anyone else in the world. Watch the full series → https://g.co/safety/HACKINGGOOGLE\n\nSubscribe to our Channel: https://www.youtube.com/google\r\nTweet with us on Twitter: https://twitter.com/google\r\nFollow us on Instagram: https://www.instagram.com/google\r\nJoin us on Facebook: https://www.facebook.com/Google",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/aOGFY1R4QQ4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/aOGFY1R4QQ4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/aOGFY1R4QQ4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/aOGFY1R4QQ4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/aOGFY1R4QQ4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Google",
        "playlistId": "PL590L5WQmH8dsxxz7ooJAgmijwOz0lh2H",
        "position": 8,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "aOGFY1R4QQ4"
        },
        "videoOwnerChannelTitle": "Google",
        "videoOwnerChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA"
      },
      "contentDetails": {
        "videoId": "aOGFY1R4QQ4",
        "videoPublishedAt": "2022-10-03T09:58:07Z"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 9,
    "resultsPerPage": 25
  }
};

export default function CreateCoursePage() {
  const [playlist, setPlaylist] = useState("");
  const [playlistContent, setPlaylistContent] = useState(data);

  return (
    <MainLayout>
      <div className='max-w-5xl mx-auto'>
        <form>
          <input value={playlist} onChange={(e) => setPlaylist(e.target.value)} placeholder='Enter the playlist number'>
          </input>
          <button onClick={(e) => {
            e.preventDefault();
            loadYoutubePlaylist(playlist).then((res) => setPlaylistContent(res.data));
          }} type='submit'>Load</button>
        </form>
        {
          playlistContent && playlistContent.items.map((item) => {
            return (
              <div>
                <div>
                  <iframe allowfullscreen="" frameborder="0" height="315" src={`http://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} width="420"></iframe>
                </div>
                <Disclosure as="div" className='mb-8' key={item.snippet.position}>
                  {
                    ({ open }) => (
                      <>
                        <div className='overflow-hidden bg-white rounded-xl'>
                          <Disclosure.Button as="div" className='sticky top-0 flex items-center justify-between px-6 py-4 font-semibold bg-indigo-200 cursor-pointer md:px-10 md:py-8 rounded-xl'>
                            <h3 className='md:text-2xl'>{item.snippet.title}</h3>
                            <div className='flex items-center'>
                              <div className='w-6 h-6'>
                                <ChevronRightIcon className={(open ? 'rotate-90 transform' : '') + 'w-6 h-6 text-indigo-500'} />
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel as='div' id="book-content" className='px-4 py-4 text-lg leading-8 text-justify shadow-lg md:py-10 md:px-20' dangerouslySetInnerHTML={{ __html: item.snippet.description }}>
                          </Disclosure.Panel>
                        </div>
                      </>
                    )
                  }
                </Disclosure>
              </div>
            );
          })
        }
      </div>
    </MainLayout>
  );
}
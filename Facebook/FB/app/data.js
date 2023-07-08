const post = [
  {
    id: 1,
    image:
      "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/347436931_6440574276056713_1290068543938466277_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=TMr6gCy70kIAX9JYl0p&_nc_ht=scontent.fewr1-6.fna&oh=00_AfBUJ5XxbpGzZD0Oc9J6CUbwvHwTvOnzrQKZAwPuB9Sgpw&oe=64A56910",
    content: "🧿🧿 Apple of my eyes 🧿🧿",
    like: 300,
    comment: 20,
    timeAgo: "24 min",
    author: {
      name: "Risala Ahmed",
      photo:
        "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/343102159_1373458829894730_6105178384419777567_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Q5W2iLycY4UAX98liGD&_nc_ht=scontent.fewr1-5.fna&oh=00_AfDQitLraomrvLOZdrk_w5UwkQZqiPEyfLTy7q_WkFxfPQ&oe=64A63483",
    },
  },
  {
    id: 2,
    image:
      "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/225993299_357226759100414_274554304878866078_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uFlbq16UuTQAX_qIbGQ&_nc_ht=scontent.fewr1-5.fna&oh=00_AfAaB3DFlnCOMOYe1R-3w27t_EAW5wmOt3A_dtuJbBlvow&oe=64A5D56F",
    content:
      "An awkward school kid daydreaming of conquering Mumbai 👑 #ShahRukhKhan",
    like: "4.9k",
    comment: 126,
    timeAgo: "3 h",
    author: {
      name: "Kazi Shehjad Islam",
      photo:
        "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/277579633_5083337351730233_3228601268835239453_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XdnNTmm3zzcAX9-JlCK&_nc_ht=scontent.fewr1-5.fna&oh=00_AfBSthqAEF3m_J74ED_7UJYnsi51c0-5DMDQ_0zq5dfx0w&oe=64A640F9",
    },
  },
  {
    id: 3,
    image:
      "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/348715519_6734946386540270_5581102706911081893_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ddn5xh5OeKcAX9IxBah&_nc_ht=scontent.fewr1-6.fna&oh=00_AfAlyBtCDuDE_ghW7bG5Dg8mPn4KNTzbYSC2Z7YSwKMAYg&oe=64A5B08C",
    content:
      "Finally found someone to go to Eidgah, boro mama 😀 এই ঈদ টা আমার জন্য স্পেশাল আলহামদুলিল্লাহ। অনেক বছর পর আবার নানা বাসায় ঈদ করতে আসছি, সাথে নিজের দেয়া প্রথম কুরবানী। আল্লাহ আমাদের সবার পশু এবং মনের পশুর কুরবানী কবুল করুক। সবাইকে ঈদের অনেক অনেক শুভেচ্ছা। ঈদ মোবারক 🌙",
    like: `You, Mina Kabir, Shehjad Islam and ${225} others`,
    comment: 32,
    timeAgo: "3 d",
    author: {
      name: "Mohammad Shikhar",
      photo:
        "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/333793201_3028450314117024_7156654549629846001_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6odsT66INEEAX8wEStL&_nc_ht=scontent.fewr1-5.fna&oh=00_AfB4KmsYKvS6wO93epT8hyZ-YHse6qwFBh32UgETT9bobA&oe=64A61A01",
    },
  },
  {
    id: 4,
    image:
      "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/357352761_2473630742832475_5001347319236374021_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Lyk8pirXDEgAX9mfo43&_nc_ht=scontent.fewr1-6.fna&oh=00_AfDAiJzwhzJHVA8C6nsjMWzWQIdxyaSm9Chg13PlzMMpGA&oe=64A6459F",
    content: "EID-UL-ADHA’23 ♥️🧡",
    like: `Khalid Bin Ahad and ${195} others`,
    comment: 7,
    timeAgo: "2 d",
    author: {
      name: "Pritylata Prity (Prity)",
      photo:
        "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/357352761_2473630742832475_5001347319236374021_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Lyk8pirXDEgAX9mfo43&_nc_ht=scontent.fewr1-6.fna&oh=00_AfDAiJzwhzJHVA8C6nsjMWzWQIdxyaSm9Chg13PlzMMpGA&oe=64A6459F",
    },
  },
  {
    id: 5,
    image:
      "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/357525270_3179914165488721_4116256270855593907_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jyjwbsqqVxwAX_DE7bZ&_nc_ht=scontent.fewr1-5.fna&oh=00_AfAjM6BHRpHTR5dCk-3sE3tJfOKWo74wmsx54bKly1ppTA&oe=64A5A620",
    content: "They grow too fast 😎",
    like: `${23}`,
    comment: 1,
    timeAgo: "23 h",
    author: {
      name: "Mizanur Rahman (মিজানুর রহমান)",
      photo:
        "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/337087938_890965538877715_2785277614700506967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XcYgAkxgpusAX-EOU1E&_nc_ht=scontent.fewr1-6.fna&oh=00_AfBodIr9TScIj3BXCDj9qMFxtL19sCvL9TQ_13l2jUnRUw&oe=64A69BB3",
    },
  },
  {
    id: 6,
    image:
      "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/357349907_1604012793417572_7813769426314566243_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sVJ-XH3b978AX-jhPgz&_nc_ht=scontent.fewr1-5.fna&oh=00_AfDkcKZNtd6vpAZofcSBMl_Vv5c83KUjXdy_2olTBXfXlQ&oe=64A5C2BF",
    content: "Lovely Apu ra ❤️❤️ #eiduladha2023",
    like: `Sumaiya Anie, Sanzida Saz and ${68} others`,
    comment: 5,
    timeAgo: "2 d",
    author: {
      name: "Nilanti Nisa",
      photo:
        "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/332304847_1646670579112086_8814866204206164719_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JAm75X5yQ_gAX-jQsBi&_nc_ht=scontent.fewr1-6.fna&oh=00_AfC9frdsei7sdtLAdZxJCPfO6FGqo2bKhfNziaHl8W6kBQ&oe=64A57EA8",
    },
  },
  {
    id: 7,
    image:
      "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/357125102_2558759670947579_4469880688793398363_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=94Wym47vZrsAX9SOCUg&_nc_ht=scontent.fewr1-5.fna&oh=00_AfArODhcfdarpPq2bi-2jSmmsIVF49J7zECXIViGRAzV9w&oe=64A5CAF6",
    content: "ঈদে মা &খালু সঙ্গে।",
    like: `Mollah Khairul and ${9} others`,
    comment: 5,
    timeAgo: "9 h",
    author: {
      name: "Shahina Chobi",
      photo:
        "https://scontent.fewr1-6.fna.fbcdn.net/v/t1.6435-9/190998591_1957839431039609_6038890374305252585_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JHnUrHdhGbAAX_-SRje&_nc_ht=scontent.fewr1-6.fna&oh=00_AfAqk-j8oimE3HxD82syEdy-KmjzQabz9g4wfrVMghM3Xw&oe=64C8D7EA",
    },
  },
  {
    id: 8,
    image:
      "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/342395990_913464109912550_8947124787156052270_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=FrLBWMwrYrMAX_PaurN&_nc_ht=scontent.fewr1-5.fna&oh=00_AfDO91YTLiEclLg2IbuzuHGXC8zXG-JbGXUYWY3unuXd_Q&oe=64A6A2C8",
    content:
      "To say I’m blessed to have a brother like you would be the biggest understatement ever❤️Happy birthday, bro! Be the reason of your own happiness 🫰Keep smiling Bruh😇 Most importantly kal treat ta deye deyo🫡Sathe salami o 😌😌😌Have a blast 💥",
    like: `MD Wale Ullah Wale and ${99} others`,
    comment: 10,
    timeAgo: "4 h",
    author: {
      name: "Ishraqul Islam",
      photo:
        "https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/330351577_1404259327014592_8566008626467759893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P80wakKttiMAX_wcq0c&_nc_ht=scontent.fewr1-5.fna&oh=00_AfA9xqPK0veLVJHl_eA_00KLXD-ZU7G5DtH2vWfCGI186g&oe=64A6F5D5",
    },
  },
  {
    id: 9,
    image:
      "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/337169856_731480838557553_5967393527916817404_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ahLiA8r84-AAX8P5Qr-&_nc_ht=scontent.fewr1-6.fna&oh=00_AfAnNBhg-SyfI3l1QsUzEh20r0X7urBKJFOnqxlMgrD0eg&oe=64A5AFED",
    content: "Family ❤️❤️ #eiduladha2023",
    like: `Ishraqul Islam and ${100} others`,
    comment: 30,
    timeAgo: "1 d",
    author: {
      name: "Tasmiyah K Ansari",
      photo:
        "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/337272313_220951397258215_5106177048241952053_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=YMfptmr4XNAAX8BwJf2&_nc_ht=scontent.fewr1-6.fna&oh=00_AfCa1hYN5WBTX5Iv0HurOvv93cXrUAciR9nxXfIYNwKYTw&oe=64A6F45E",
    },
  },
  {
    id: 10,
    image:
      "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/357159874_3184595261687115_2343002004361709976_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3S1SPj_puooAX9dQmat&_nc_ht=scontent.fewr1-6.fna&oh=00_AfCcf47pKqpamQ2rSATfWcaGxjKXDvR2srEYYzGJnmC5zw&oe=64A5B239",
    content: "Happy Birthday Zayan Mama 🎂🎉🎊",
    like: `Shahina Chobi and ${50} others`,
    comment: 8,
    timeAgo: "1 h",
    author: {
      name: "Tahmid Hossain",
      photo:
        "https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/357006556_3183970481749593_2459386313130926289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=0O9CSgZzTfYAX8qH8ld&_nc_ht=scontent.fewr1-6.fna&oh=00_AfD8SikzNnePMb3Nf3o9RqcCUNGWfqzfmgJHysvv8p-QyQ&oe=64A71E1A",
    },
  },
];

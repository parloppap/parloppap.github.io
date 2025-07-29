<script setup>
const setimg = (img) => {
  return './src/images/' + img;
};

const projects = [
  {
    name: 'สัญจรไม่สำราญ:',
    link: 'https://wevis.info/unmerry-go-round/',
    img: 'unmerry.png',
  },
  {
    name: 'จับโกงงบจัดซื้อจัดจ้างภาครัฐ',
    link: 'https://procurement.actai.co/',
    img: 'actai.png',
  },
  {
    name: 'Poverty Policy: ลองจนดูไหม? ถ้าเลือกได้ ทำยังไงให้หายจน',
    link: 'https://theactive.thaipbs.or.th/dataviz/escapepoverty/',
    img: 'povertypolicy.jpg',
  },
  {
    name: 'ตีค่าค้าคาร์บอนเครดิตป่าชุมชน?',
    link: 'https://workpointtoday.com/carboncredits-benefits-interactive/',
    img: 'carbon2.png',
  },
  {
    name: 'ล่า หา ‘คาร์บอนเครดิตเกิน’',
    link: 'https://workpointtoday.com/carboncredits-interactive/',
    img: 'carbon1.png',
  },
  {
    name: 'เช็คความเข้าใจ.. เกิดอะไรขึ้นในไฟป่าภาคเหนือ?',
    link: 'https://workpointtoday.com/northern-wildfire-interactive/',
    img: 'flames.png',
  },
  {
    name: '‘พาดหัวข่าว’ เล่าอะไรให้คนไทยฟัง?',
    link: 'https://projects.punchup.world/headlines/',
    img: 'headlines.png',
  },
  {
    name: 'หนี้ครัวเรือนไทย วิกฤตแค่ไหน ทำไมถึงไม่ควรมองข้าม?',
    link: 'https://projects.pier.or.th/household-debt/',
    img: 'debt.png',
  },
  {
    name: 'Under the Asian Moon',
    link: 'https://projects.punchup.world/fullmoon/',
    img: 'moon.png',
  },
  {
    name: 'คนไทยเสียปีสุขภาพดี',
    link: 'https://results2019.bodthai.net/',
    img: 'results2019.png',
  },
  {
    name: 'ผ่างบเมือง :: ให้งบประมาณเมืองเป็นเรื่องตรวจสอบได้',
    link: 'https://localbudgeting.actai.co/',
    img: 'budgeting.png',
  },
  {
    name: 'สแกนจิตใจคนทำงานภาครัฐ',
    link: 'https://wellbeing.spp.cmu.ac.th/',
    img: 'cmu.png',
  },
  {
    name: 'เจาะปัญหาการศึกษาไทย กับชีวิตเด็กไทยที่หลุดออกนอกระบบ',
    link: 'https://thevisual.thaipbs.or.th/drop-out-students/main/',
    img: 'school.png',
  },
  {
    name: 'ลิ้นของคุณด้านชาเเค่ไหน? เค็มระดับใด…ใช่สำหรับคุณ?',
    link: 'https://sodiumquiz.lowsaltthai.com/',
    img: 'sodium.png',
  },
  {
    name: 'สืบจากขยะ ใครกันที่ต้องรับผิดชอบ!',
    link: 'https://plasticfreefuture.greenpeace.or.th/',
    img: 'trash.png',
  },
  {
    name: 'WHAT’S ON SHELF? เราอ่านหนังสืออะไรกันบ้าง.. ในช่วงปีที่ผ่านมา',
    link: 'https://projects.punchup.world/booksonshelf/',
    img: 'books.jpg',
  },
  {
    name: '“ยุติธรรมทำลาย” เมื่อกฎหมาย คุกคาม ประชาชน',
    link: 'https://wevis.info/anti-slapp/',
    img: 'slapp.png',
  },
  {
    name: 'Tracking Forced Labour at Sea in SouthEast Asia',
    link: 'https://saveseafishers.org/forcedlabouratSEA/',
    img: 'seabound.jpg',
  },
];
</script>

<template>
  <div class="min-h-screen py-5 sm:py-30">
    <div class="flex justify-center">
      <h1 class="title showcase-text uppercase">Sh</h1>
      <h1 class="title showcase-text uppercase">ow</h1>
      <h1 class="title showcase-text uppercase">ca</h1>
      <h1 class="title showcase-text uppercase">se</h1>
    </div>

    <img
      src="../public/src/images/smile-line.svg"
      class="mx-auto w-3/4 sm:w-1/4 mb-15"
      alt=""
    />

    <div class="flex flex-wrap">
      <div class="w-full sm:w-2/4 lg:w-1/4" v-for="item in projects">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <img
            :src="setimg(`${item.img}`)"
            :alt="item.name"
            class="aspect-video"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showcase-text {
  font-size: 100px;

  @include mobile {
    font-size: 40px;
  }
}
</style>

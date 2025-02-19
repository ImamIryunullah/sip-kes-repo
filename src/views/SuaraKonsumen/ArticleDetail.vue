<template>
    <div class="bg-gray-100">
      <NavbarNews /> <!-- Include the navbar -->
  
      <section class="container mx-auto px-4 py-6">
  <h2 class="text-xl font-semibold mb-4">Detail Berita...</h2>
  <div class="flex flex-col sm:flex-row sm:space-x-6">
    <!-- Left Section (Main Article) -->
    <div class="w-full sm:w-2/3 mb-6 sm:mb-0">
      <article class="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="@/assets/bahlil.jpeg" alt="Latest Story" class="w-full h-full object-cover rounded-md mb-4 transition-transform transform hover:scale-105"/>
        <h3 class="text-lg sm:text-2xl font-semibold">{{ article.judul }}</h3>
        <p class="text-xs sm:text-sm text-gray-500 mt-4">{{ article.waktu_publikasi }}</p>
        <p class="text-xs sm:text-sm text-black mt-4 font-bold underline">{{ article.kategori }}</p>
        <p class="text-sm sm:text-base text-gray-700 mt-2">{{ article.deskripsi }}</p>

      </article>
    </div>

    <!-- Right Section (Smaller Articles) -->
    <div class="w-full sm:w-1/3 space-y-6 mt-10">
      <div class="flex space-x-4 transition-all hover:bg-gray-100 p-4 rounded-lg shadow-md transform hover:scale-105">
        <img src="@/assets/bannerberita.jpeg" alt="Article 1" class="w-1/3 h-20 object-cover rounded-lg" />
        <div class="w-2/3">
          <h4 class="text-lg font-semibold text-gray-800">John Lewis, civil rights giant</h4>
          <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus aperiam quasi!</p>
          <router-link :to="'/news/1'">
            <button class="text-red-600 hover:text-red-800 font-semibold mt-4 transition-all hover:underline">Baca Selengkapnya</button>
          </router-link>
        </div>
      </div>

      <div class="flex space-x-4 transition-all hover:bg-gray-100 p-4 rounded-lg shadow-md transform hover:scale-105">
        <img src="@/assets/bannerberita.jpeg" alt="Article 2" class="w-1/3 h-20 object-cover rounded-lg" />
        <div class="w-2/3">
          <h4 class="text-lg font-semibold text-gray-800">Beloved Arizona coach loses battle with coronavirus</h4>
          <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem architecto suscipit.</p>
          <router-link :to="'/news/2'">
            <button class="text-red-600 hover:text-red-800 font-semibold mt-4 transition-all hover:underline">Baca Selengkapnya</button>
          </router-link>
        </div>
      </div>

      <div class="flex space-x-4 transition-all hover:bg-gray-100 p-4 rounded-lg shadow-md transform hover:scale-105">
        <img src="@/assets/bannerberita.jpeg" alt="Article 3" class="w-1/3 h-20 object-cover rounded-lg" />
        <div class="w-2/3">
          <h4 class="text-lg font-semibold text-gray-800">Beloved Arizona coach loses battle with coronavirus</h4>
          <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius esse labore dignissimos.</p>
          <router-link :to="'/news/3'">
            <button class="text-red-600 hover:text-red-800 font-semibold mt-4 transition-all hover:underline">Baca Selengkapnya</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</section>

  
    <FooterNews />
    </div>
  </template>
  
  <script>
import FooterNews from '@/components/FooterNews.vue';
import NavbarNews from '@/components/NavbarNews.vue';
  
  export default {
    components: {
      FooterNews,
      NavbarNews
    },
    data() {
      return {
        article: {
          judul: 'John Lewis makes final journey across Edmund Pettus Bridge',
          waktu_publikasi: '27 Agustus 2024',
          kategori: 'Berita Nasional',
          deskripsi: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ad doloremque? Repellendus animi quisquam labore veniam tempore fugit ipsam deserunt iste! Hic consequatur totam, facere fuga magnam culpa eveniet officia repellat rerum quae deserunt dolores odit suscipit fugit labore maxime excepturi corporis architecto nesciunt dignissimos et corrupti? Sit quibusdam perspiciatis architecto adipisci maxime. Voluptas deleniti cumque optio ducimus, tempore inventore quas exercitationem non iure odio? Aliquid quae id reprehenderit eaque. Animi iste dicta molestias non dolorem voluptatibus incidunt? Esse, aliquam? Cumque commodi inventore nesciunt enim perferendis eum dolor, aut laudantium iusto cum eos sed repellat id illo? Corrupti dolore impedit reiciendis laudantium magni perspiciatis aperiam ipsam quos neque odit alias, libero excepturi voluptas sunt et cumque, itaque suscipit nihil? Dolorum vel, illo facilis perferendis eligendi consequuntur quasi ut quisquam accusamus voluptatem tempora earum porro doloremque eius ducimus in adipisci ex placeat! Exercitationem, ut! Sint iure perferendis ad alias velit doloremque odit rerum accusantium quas fugiat earum beatae perspiciatis nesciunt, sit vitae id? Asperiores mollitia necessitatibus dolores, accusantium illum minima, adipisci nobis corporis enim numquam nisi placeat! Blanditiis repellendus sit perspiciatis iure quisquam! Odio, ea iure pariatur eligendi eum itaque, nostrum in ducimus adipisci inventore modi qui esse repudiandae quia necessitatibus iusto? Mollitia aspernatur consequuntur unde rem, magnam aliquid amet ipsa sint ipsum obcaecati molestias illo quisquam quos, ad quaerat expedita enim dolores, nam recusandae odio eos iure esse non. Quasi dolor, cupiditate ducimus veniam repellat voluptates a ex, iusto officia nisi vel, consectetur aperiam explicabo accusantium odit? Fugit facere laboriosam vel maxime alias ad tempora aliquam dolorum voluptas? Veniam placeat voluptates animi libero alias, cupiditate, tempore voluptatem eaque obcaecati voluptatibus nam velit consectetur eos aliquid recusandae deserunt vero? Fugit ex, vero accusantium odit laborum dignissimos ad autem necessitatibus quibusdam itaque aspernatur deleniti repudiandae obcaecati ipsam exercitationem fugiat? Voluptatem quisquam natus doloribus numquam impedit repellat ipsa, perferendis velit dolor in totam sequi saepe, atque consequuntur cupiditate eum veritatis quaerat, porro asperiores? Voluptas doloremque incidunt nobis molestiae laboriosam natus optio dolor beatae a, aspernatur sunt ea repellendus vero quos vitae at alias autem veniam possimus ex quasi quam? Qui, repudiandae? Iste dolor id quia voluptas assumenda. Repellat itaque quae at consectetur sequi sed explicabo vitae, amet cum atque aliquid, laborum delectus neque quasi nostrum unde molestias necessitatibus ipsa nisi saepe. Quos sed, esse, obcaecati magnam delectus explicabo accusantium ratione tempore sit nihil aliquid quis illo mollitia facilis fugiat maxime, dolorum consequuntur molestiae earum dolore ad blanditiis omnis architecto quo. Cumque autem asperiores corporis architecto cupiditate, assumenda nostrum officiis voluptate, qui itaque sunt eos vero ut molestias odit atque quia possimus? Quia similique voluptatem numquam commodi recusandae reprehenderit iste necessitatibus incidunt illo ea eaque nisi quasi vitae fuga magni quis delectus, officia modi veritatis sed obcaecati molestias libero! Dicta quas voluptates dolorum fugiat, praesentium eveniet eius velit vitae mollitia. Eligendi voluptatum atque natus, suscipit cumque, eveniet dolore vero ea aperiam laudantium expedita quisquam placeat molestias consequatur, nobis amet voluptas inventore debitis excepturi nam nesciunt eaque id. Hic iste numquam ex nulla, error saepe assumenda distinctio totam illum facilis eius praesentium provident. Sequi omnis blanditiis nisi voluptates dolorem, deserunt corrupti quis accusamus optio? Suscipit placeat animi voluptas numquam! Aperiam eaque quo vel natus voluptatem quasi mollitia id quibusdam culpa quis obcaecati, quidem alias doloribus eligendi voluptatum in iure! Natus laboriosam sunt ea consequuntur veniam voluptatem recusandae ad vero eius. Et debitis temporibus voluptates adipisci nesciunt recusandae maiores facilis ullam, voluptate quod laudantium perferendis inventore, odit nam nihil at praesentium molestias? Ipsam fugit deleniti molestias, adipisci accusantium quis quod. Nemo ipsa quisquam velit voluptatum suscipit excepturi minima commodi illo sequi quos! Voluptatum atque unde quas.',
          gambar: '@/assets/bahlil.jpeg',
        }
      };
    },
    name: 'ArticleDetail'
  };
  </script>
  
  <style scoped>
  /* Adding smooth hover transitions */
  .transition-all {
    transition: all 0.3s ease;
  }
  
  .transition-transform {
    transition: transform 0.3s ease;
  }
  
  .hover:scale-105:hover {
    transform: scale(1.05);
  }
  
  .hover:underline:hover {
    text-decoration: underline;
  }
  
  .hover:bg-gray-100:hover {
    background-color: #f7fafc;
  }
  
  .hover:shadow-lg:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  </style>

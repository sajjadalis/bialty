import {
  Info,
  Check,
  Close,
  Page,
  Cart,
  Website,
  Review,
} from "../components/Icons.js";

const Home = {
  template: `
  <div>
    <el-steps :active="active" finish-status="success" class="mb-10">
      <el-step title="Step 1" :icon="Page" description="Page and Post Alt texts"/>
      <el-step title="Step 2" :icon="Cart" description="Product Alt texts (for Woocommerce)" />
      <el-step title="Step 3" :icon="Website" description="Site title, Disable Homepage, Blacklist" />
      <el-step title="Step 4" :icon="Review" description="Review & Save Settings"/>
    </el-steps>

    <div v-if="active === 0">
      <div class="flex items-center">
        <label class="font-bold text-lg mr-3">Select what to do with missing alt tags</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Missing alt tags are which are not defined and all images show an empty alt tag"
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>
      <el-select v-model="value" placeholder="Select" size="large" class="w-full mt-5">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>

      <div class="flex items-center mt-10">
        <label class="font-bold text-lg mr-3">Select what to do with existing alt tags</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Existing alt tags are the one which you already defined and want to replace."
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select v-model="value" placeholder="Select" size="large" class="w-full mt-5">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
    </div>

    <div v-if="active === 1">
    <div class="flex items-center">
        <label class="font-bold text-lg mr-2">Select what to do with missing product alt tags</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Missing alt tags are which are not defined and all images show an empty alt tag"
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>
      <el-select v-model="value" placeholder="Select" size="large" class="w-full mt-5" disabled>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>

      <div class="flex items-center mt-10">
        <label class="font-bold text-lg mr-2">Select what to do with existing product alt tags</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Existing alt tags are the one which you already defined and want to replace."
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select v-model="value" placeholder="Select" size="large" class="w-full mt-5" disabled>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>

      <div class="mt-6 flex items-center">
        <label class="font-bold text-lg mr-2">Disable for Product Gallery</label>
        <el-tooltip
          class="box-item mr-3"
          effect="dark"
          content="Existing alt tags are the one which you already defined and want to replace."
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
        <el-switch v-model="disable_gallery" class="ml-3" disabled size="large" />
      </div>
    </div>

    <div v-if="active === 2" style="margin-top: 20px;">
      <el-row :gutter="20">
        <el-col :span="7">
          <label class="font-bold text-lg mr-2">Add Site Title</label>
          <el-tooltip
              class="box-item mr-3"
              effect="dark"
              content="Existing alt tags are the one which you already defined and want to replace."
              placement="right-start"
            >
              <Info class="w-6 h-6" />
          </el-tooltip>
        </el-col>
        <el-col :span="17">
          <el-switch v-model="disable_gallery" size="large" />
        </el-col>
      </el-row>

      <el-row :gutter="20" class="mt-5">
        <el-col :span="7">
          <label class="font-bold text-lg mr-2">Disable for Homepage</label>
          <el-tooltip
              class="box-item"
              effect="dark"
              content="Existing alt tags are the one which you already defined and want to replace."
              placement="right-start"
            >
              <Info class="w-6 h-6" />
          </el-tooltip>
        </el-col>
        <el-col :span="17">
          <el-switch v-model="disable_gallery" size="large" />
        </el-col>
      </el-row>

      <div class="flex items-center mt-10">
        <label class="font-bold text-lg mr-3">Black List Posts/Pages/Products</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Disable BIALTY on selected pages"
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select
        v-model="blacklist"
        multiple
        placeholder="Select the pages where you don't want to use Bialty"
        class="w-full mt-5"
      >
        <el-option
          v-for="item in posts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div v-if="active === 3" style="margin-top: 20px;">
      <h2>Review</h2>  
      
      <el-card shadow="never" class="box-card mb-5">
        <span class="text-md font-bold">Post and Pages Settings</span>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Empty alt tags will be replaced with Yoast / Rank Math Focus Keyword
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Existing alt tags will be replaced with Yoast / Rank Math Focus Keyword
        </p>
      </el-card>

      <el-card shadow="never" class="box-card mb-5">
        <span class="text-md font-bold">WooCommerce Products Settings</span>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Empty product alt tags will be replaced with Yoast / Rank Math Focus Keyword
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Close class="w-6 h-6 mr-2" /> Existing product alt tags will not be replaced. Setting is disabled.
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Alt tags are not disabled for Product Gallery. (Recommended setting)
        </p>
      </el-card>

      <el-card shadow="never" class="box-card mb-5">
        <span class="text-md font-bold">Website title, Disable Homepage, Blacklist</span>
        <p class="text-xs mb-0 flex items-center">
        <Close class="w-6 h-6 mr-2" /> Website title will not be added to alt tags.
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Alt tags should work on static homepage. (Recommended setting)
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> You have {{ blacklist.length }} pages in blacklist. &nbsp; <span v-if="blacklist.length > 0">Bialty won't work on these selected pages.</span>
        </p>
      </el-card>

    </div>

    <div v-if="active === 4">
      <div class="flex items-center justify-center mb-5" style="color: #67c23a">
        <Check class="w-16 h-16 mr-3" /> <span class="text-xl font-bold">All Done</span>
      </div>

      <el-card shadow="never" class="box-card mb-5">
        <span class="text-md font-bold">Post and Pages Settings</span>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Empty alt tags will be replaced with Yoast / Rank Math Focus Keyword
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Existing alt tags will be replaced with Yoast / Rank Math Focus Keyword
        </p>
      </el-card>

      <el-card shadow="never" class="box-card mb-5">
        <span class="text-md font-bold">WooCommerce Products Settings</span>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Empty product alt tags will be replaced with Yoast / Rank Math Focus Keyword
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Close class="w-6 h-6 mr-2" /> Existing product alt tags will not be replaced. Setting is disabled.
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Alt tags are not disabled for Product Gallery. (Recommended setting)
        </p>
      </el-card>

      <el-card shadow="never" class="box-card mb-5">
        <span class="text-md font-bold">Website title, Disable Homepage, Blacklist</span>
        <p class="text-xs mb-0 flex items-center">
        <Close class="w-6 h-6 mr-2" /> Website title will not be added to alt tags.
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> Alt tags should work on static homepage. (Recommended setting)
        </p>
        <p class="text-xs mb-0 flex items-center">
        <Check class="w-6 h-6 mr-2" /> You have {{ blacklist.length }} pages in blacklist. &nbsp; <span v-if="blacklist.length > 0">Bialty won't work on these selected pages.</span>
        </p>
      </el-card>

      <el-button type="primary" size="large" class="w-full" @click="active = 0">
        Restart the Settings Wizard
      </el-button>
    </div>

    <div class="mt-10">
      <el-button type="primary" size="large" @click="prev" v-if="active < 4" :disabled="active === 0">Previous step</el-button>
      <el-button type="primary" size="large" @click="next" v-if="active < 3">Next step</el-button>
      <el-button type="success" size="large" @click="next" v-if="active === 3">Save Settings</el-button>
    </div>
  </div>
  `,
  components: {
    Info,
    Check,
    Close,
  },
  setup() {
    const { ref, onMounted, watch } = Vue;
    // Use ref for reactive data
    const count = ref(0);

    const active = ref(0);
    const disable_gallery = ref(false);

    const next = () => {
      if (active.value++ > 3) active.value = 0;
    };

    const prev = () => {
      active.value--;
    };

    // Use watch for watching changes
    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    });

    const value = ref("alt_empty_fkw");
    const options = [
      {
        value: "",
        label: "Disabled",
      },
      {
        value: "alt_empty_fkw",
        label: "Yoast / Rank Math Focus Keyword",
      },
      {
        value: "alt_empty_title",
        label: "Post Title",
        disabled: true,
      },
      {
        value: "alt_empty_imagename",
        label: "Image Name",
        disabled: true,
      },
      {
        value: "alt_empty_both",
        label: "Yoast / Rank Math Focus Keyword & Post Title",
        disabled: true,
      },
    ];

    const blacklist = ref([]);
    const posts = [
      {
        value: 1,
        label: "Exploring the Enchanting Streets of Paris",
      },
      {
        value: 2,
        label: "Adventures in the Serene Landscapes of Kyoto",
      },
      {
        value: 3,
        label: "Discovering Hidden Gems in the Amalfi Coast",
      },
      {
        value: 4,
        label: "Journey through the Vibrant Markets of Marrakech",
      },
      {
        value: 5,
        label: "Escaping to the Tranquil Islands of Bali",
      },
    ];

    // Define methods
    const increment = () => {
      count.value++;
    };

    // Return data and methods to be used in the template
    return {
      count,
      increment,
      active,
      next,
      prev,
      value,
      options,
      disable_gallery,
      blacklist,
      posts,
      Page,
      Cart,
      Website,
      Review,
    };
  },
};

export default Home;

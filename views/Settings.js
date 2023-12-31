import {
  Info,
  Check,
  Close,
  Page,
  Cart,
  Website,
  Review,
  AutoFocusIcon,
} from "../components/Icons.js";

const Home = {
  template: `
  <div>
    
    <el-card shadow="never" class="box-card mb-10 p-3 pb-5">
    <el-text type="primary" class="text-lg font-bold">Step 1: Pages and Posts Alt texts</el-text>
    <el-card shadow="never" class="box-card mb-5 mt-5">
      <div class="flex items-center  justify-between">
          <div>
            <div class="">
              <span class="text-lg font-bold"
                >Auto Focus Keyword Plugin is not Installed</span
              >
            </div>
            <div class="text-sm mt-3" style="line-height: 150%;">
              No focus keywords everywhere? Did you know that the Auto Focus Keyword plugin can
              automatically add focus keywords for you?
            </div>
          </div>
          <el-button size="large" class="ml-3"
            >Give it a try</el-button
          >
      </div>
      </el-card>

      <div class="flex items-center mb-3">
        <label class="font-bold text-md mr-2">Select what to do with missing alt tags</label>
        <el-tooltip
            class="box-item"
            effect="dark"
            content="Missing alt tags are which are not defined and all images show an empty alt tag"
            placement="right-start"
          >
            <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select v-model="value" placeholder="Select" size="large" class="w-full mb-5">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>

      <div class="flex items-center mb-3">
        <label class="font-bold text-md mr-2">Select what to do with existing alt tags</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Existing alt tags are the one which you already defined and want to replace."
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select v-model="value" placeholder="Select" size="large" class="w-full">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
    </el-card>

    
    <el-card shadow="never" class="el-cs-disabled mb-10 p-3 pb-5">
      <el-text type="primary" class="text-lg font-bold">Step 2: Product Alt texts (for Woocommerce)</el-text>
      <el-alert title="Get Pro version to enable Bulk Image Alt Text for Woocommerce Products" type="error" class="mb-5 mt-5" />

      <div class="flex items-center mb-3">
        <label class="font-bold text-md mr-2">Select what to do with missing product alt tags</label>
        <el-tooltip
            class="box-item"
            effect="dark"
            content="Missing alt tags are which are not defined and all images show an empty alt tag"
            placement="right-start"
          >
            <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select v-model="value" placeholder="Select" size="large" disabled class="w-full mb-5">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>

      <div class="flex items-center mb-3">
        <label class="font-bold text-md mr-2">Select what to do with existing product alt tags</label>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Existing alt tags are the one which you already defined and want to replace."
          placement="right-start"
        >
          <Info class="w-6 h-6" />
        </el-tooltip>
      </div>

      <el-select v-model="value" placeholder="Select" size="large" class="w-full mb-5" disabled>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>

      <el-row :gutter="20">
        <el-col :span="9">
          <div class="flex items-center mt-2">
            <label class="font-bold text-md mr-2">Disable for Product Gallery</label>
            <el-tooltip
                class="box-item mr-3"
                effect="dark"
                content="Existing alt tags are the one which you already defined and want to replace."
                placement="right-start"
              >
                <Info class="w-6 h-6" />
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="15">
          <el-switch v-model="disable_gallery" disabled size="large" />
        </el-col>
      </el-row>
    </el-card>

    <el-card shadow="never" class="box-card mb-10 p-3 mt-2">
      <el-text type="primary" class="text-lg font-bold">Step 3: Blacklist, Site title, Disable Homepage</el-text>
      <div class="flex items-center mb-5 mt-5">
        <label class="font-bold text-md mr-3">Black List Posts/Pages/Products</label>
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
        size="large"
        placeholder="Select the pages where you don't want to use Bialty"
        class="w-full mb-5"
      >
        <el-option
          v-for="item in posts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-row :gutter="20" class="mb-5">
        <el-col :span="9">
          <div class="flex items-center mt-2">
            <label class="font-bold text-md mr-2">Add Site Title</label>
            <el-tooltip
                class="box-item mr-3"
                effect="dark"
                content="Existing alt tags are the one which you already defined and want to replace."
                placement="right-start"
              >
                <Info class="w-6 h-6" />
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="15">
          <el-switch v-model="disable_gallery" size="large" />
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="9">
          <div class="flex items-center mt-2">
            <label class="font-bold text-md mr-2">Disable for Homepage</label>
            <el-tooltip
                class="box-item"
                effect="dark"
                content="Existing alt tags are the one which you already defined and want to replace."
                placement="right-start"
              >
                <Info class="w-6 h-6" />
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="15">
          <el-switch v-model="disable_gallery" size="large" />
        </el-col>
      </el-row>
    </el-card>

    <div class="flex justify-between items-center">
      <el-button type="success" size="large" class="w-48" @click="next">Save Settings</el-button>
      <div class="flex items-center mt-2">
        <label class="font-bold text-md mr-2">Delete Settings</label>
        <el-tooltip
            class="box-item"
            effect="dark"
            content="Checking this box will remove all settings when you deactivate plugin."
            placement="right-start"
          >
            <Info class="w-6 h-6" />
        </el-tooltip>
        <el-switch v-model="disable_gallery" size="large" class="ml-3" />
      </div>
    </div>
  </div>
  `,
  components: {
    Info,
    Check,
    Close,
    AutoFocusIcon,
  },
  setup() {
    const { ref, onMounted, watch } = Vue;

    const active = ref(0);
    const disable_gallery = ref(false);

    const next = () => {
      if (active.value++ > 3) active.value = 0;
    };

    const prev = () => {
      active.value--;
    };

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

    // Return data and methods to be used in the template
    return {
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

<script setup lang="ts">
import {
  CDropdown, CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from "@coreui/vue/dist/esm/components/dropdown";
import {CAvatar} from "@coreui/vue/dist/esm/components/avatar";
import avatar from '@/assets/images/avatars/2.jpg'
import {useAuthStore} from "@/stores/authentication/authStore.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";

const auth = useAuthStore()
const userStore = useUserStore()
const logoutFn = async () => {
  await auth.logoutFunction()
}

</script>

<template>
  <CDropdown placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0" :caret="false">
      Hola, {{ userStore.firstName }}
      <CAvatar class="ms-2" :src="avatar" size="md" status="success"/>
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">

      <!-- Settings and Profile Section -->
      <CDropdownHeader
          as="h6"
          class="bg-body-secondary text-body-secondary fw-semibold rounded-top mb-2"
      >
        settings
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-user"/>
        profile
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-settings"/>
        settings
      </CDropdownItem>
      <!-- End Settings and Profile Section -->
      <CDropdownDivider/>
      <CDropdownItem @click="logoutFn">
        <CIcon icon="cil-lock-locked"/>
        logout
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<style scoped>

</style>
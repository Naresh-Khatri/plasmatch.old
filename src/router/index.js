import HomePage from '../components/Home.vue'
import about from '../components/about.vue'
import donorPage from '../components/donor-page.vue'
import patientPage from '../components/patient-page.vue'

export const routes = [
    {path: '/home', component: HomePage},
    {path: '/about', component: about},
    {path: '/donor-page', component: donorPage},
    {path: '/patient-page', component: patientPage},

]
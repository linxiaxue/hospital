import Vue from 'vue'

import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import GetInfo from '@/components/GetInfo'
import ModifyInfo from '@/components/ModifyInfo'
import Message from '@/components/Message'
import Identity from '@/components/Identity'

import Enurse from '@/components/Enurse'
import AddPatient from '@/components/AddPatient'
import ViewPatientE from '@/components/ViewPatientE'
import SelectPatientE from '@/components/SelectPatientE'

import Doctor from '@/components/Doctor'
import ViewPatientD from '@/components/ViewPatientD'
import SelectPatientD from '@/components/SelectPatientD'
import ModifyRate from '@/components/ModifyRate'
import ModifyState from '@/components/ModifyState'
import DecideLeave from '@/components/DecideLeave'
import AddNATS from '@/components/AddNATS'
import ViewNurseD from '@/components/ViewNurseD'
import ViewNursePatientD from '@/components/ViewNursePatientD'

import Wnurse from '@/components/Wnurse'
import ViewPatientW from '@/components/ViewPatientW'
import SelectPatientW from '@/components/SelectPatientW'
import AddDS from '@/components/AddDS'

import Hnurse from '@/components/Hnurse'
import ViewPatientH from '@/components/ViewPatientH'
import SelectPatientH from '@/components/SelectPatientH'
import ViewNurseH from '@/components/ViewNurseH'
import ViewNursePatientH from '@/components/ViewNursePatientH'
import AddWnurse from '@/components/AddWnurse'
import DeleteWnurse from '@/components/DeleteWnurse'
import ViewBed from '@/components/ViewBed'
import ViewBedPatient from '@/components/ViewBedPatient'

import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/test',
      name: 'test',
      component: test
    },

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/getInfo',
      name: 'GetInfo',
      component: GetInfo
    },
    {
      path: '/modifyInfo',
      name: 'ModifyInfo',
      component: ModifyInfo
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/identity',
      name: 'Identity',
      component: Identity
    },

    {
      path: '/enurse',
      name: 'Enurse',
      component: Enurse
    },
    {
      path: '/enurse/addPatient',
      name: 'AddPatient',
      component: AddPatient
    },
    {
      path: '/enurse/viewPatient',
      name: 'ViewPatientE',
      component: ViewPatientE
    },
    {
      path: '/enurse/selectPatient',
      name: 'SelectPatientE',
      component: SelectPatientE
    },

    {
      path: '/doctor',
      name: 'Doctor',
      component: Doctor
    },
    {
      path: '/doctor/viewPatient',
      name: 'ViewPatientD',
      component: ViewPatientD
    },
    {
      path: '/doctor/selectPatient',
      name: 'SelectPatientD',
      component: SelectPatientD
    },
    {
      path: '/doctor/modifyRate',
      name: 'ModifyRate',
      component: ModifyRate
    },
    {
      path: '/doctor/modifyState',
      name: 'ModifyState',
      component: ModifyState
    },
    {
      path: '/doctor/decideLeave',
      name: 'DecideLeave',
      component: DecideLeave
    },
    {
      path: '/doctor/addNATS',
      name: 'AddNATS',
      component: AddNATS
    },
    {
      path: '/doctor/viewNurse',
      name: 'ViewNurseD',
      component: ViewNurseD
    },
    {
      path: '/doctor/viewNurse/viewPatient',
      name: 'ViewNursePatientD',
      component: ViewNursePatientD
    },

    {
      path: '/wnurse',
      name: 'Wnurse',
      component: Wnurse
    },
    {
      path: '/wnurse/viewPatient',
      name: 'ViewPatientW',
      component: ViewPatientW
    },
    {
      path: '/wnurse/selectPatient',
      name: 'SelectPatientW',
      component: SelectPatientW
    },
    {
      path: '/wnurse/addDS',
      name: 'AddDS',
      component: AddDS
    },

    {
      path: '/hnurse',
      name: 'Hnurse',
      component: Hnurse
    },
    {
      path: '/hnurse/viewPatient',
      name: 'ViewPatientH',
      component: ViewPatientH
    },
    {
      path: '/hnurse/selectPatient',
      name: 'SelectPatientH',
      component: SelectPatientH
    },
    {
      path: '/hnurse/viewWnurse',
      name: 'ViewNurseH',
      component: ViewNurseH
    },
    {
      path: '/hnurse/viewWnurse/viewPatient',
      name: 'ViewNursePatientH',
      component: ViewNursePatientH
    },
    {
      path: '/hnurse/addWnurse',
      name: 'AddWnurse',
      component: AddWnurse
    },
    {
      path: '/hnurse/deleteWnurse',
      name: 'DeleteWnurse',
      component: DeleteWnurse
    },
    {
      path: '/hnurse/viewBed',
      name: 'ViewBed',
      component: ViewBed
    },
    {
      path: '/hnurse/viewBed/viewPatient',
      name: 'ViewBedPatient',
      component: ViewBedPatient
    },

  ]
})

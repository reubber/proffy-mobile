import React, { useState, useEffect} from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

import PageHeader from '../../components/pageHeader'
import TeacherItem, { Teacher } from '../../components/teacherItem'


import styles from './styles'


function TeacherList() {
  const [teachers, setTeachers]=useState([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(favoritedTeachersIds)
      }
    })
  }, [])

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setIsFiltersVisible(false)
    setTeachers(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title='Proffys Disponíveis'
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color='#FFF' />
          </BorderlessButton>
        )}
      >
       { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput 
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder='Qual a matéria?'
              placeholderTextColor='#c1bccc'
            />
            
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="qual o dia?"
                  placeholderTextColor='#c1bccc'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Hórario</Text>
                <TextInput 
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="qual a hora?"
                  placeholderTextColor='#c1bccc'
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtar</Text>
          </RectButton>
          </View>

          
        )}
      </PageHeader>
    
    <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}
    >  
      {teachers.map((teacher: Teacher) => {
        return (
          <TeacherItem 
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />)
      })}
    </ScrollView>

    </View>
  )
}

export default TeacherList

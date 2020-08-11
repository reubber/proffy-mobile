import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import PageHeader from '../../components/pageHeader'
import { Feather } from '@expo/vector-icons'

import TeacherItem from '../../components/teacherItem'
import { TextInput, BorderlessButton } from 'react-native-gesture-handler'

import styles from './styles'

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
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
              placeholder='Qual a matéria?'
              placeholderTextColor='#c1bccc'
            />
            
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="qual o dia?"
                  placeholderTextColor='#c1bccc'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Hórario</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="qual a hora?"
                  placeholderTextColor='#c1bccc'
                />
              </View>
            </View>
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
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </ScrollView>

    </View>
  )
}

export default TeacherList

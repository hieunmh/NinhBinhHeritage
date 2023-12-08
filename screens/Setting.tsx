import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

const SettingScreen = () => {
  const [checkedLanguage, setCheckedLanguage] = React.useState('VN');
  const [checkedTheme, setCheckedTheme] = React.useState('light');

  return (
    <View className='flex-1 bg-white p-5'>
      <Text style={styles.headerSection}>Chọn ngôn ngữ</Text>
      <TouchableOpacity style={styles.itemSection} onPress={() => setCheckedLanguage('VN')}>
        <Text>Tiếng Việt</Text>
        <RadioButton
          value="VN"
          status={checkedLanguage === 'VN' ? 'checked' : 'unchecked'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemSection} onPress={() => setCheckedLanguage('EN')}>
        <Text>Tiếng Anh</Text>
        <RadioButton
          value="EN"
          status={checkedLanguage === 'EN' ? 'checked' : 'unchecked'}
        />
      </TouchableOpacity>
      <Text style={styles.headerSection}>Chọn chủ đề</Text>
      <TouchableOpacity style={styles.itemSection} onPress={() => setCheckedTheme('light')}>
        <Text>Sáng</Text>
        <RadioButton
          value="light"
          status={checkedTheme === 'light' ? 'checked' : 'unchecked'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemSection} onPress={() => setCheckedTheme('dark')}>
        <Text>Tối</Text>
        <RadioButton
          value="dark"
          status={checkedTheme === 'dark' ? 'checked' : 'unchecked'}
        />
      </TouchableOpacity>
      <Text style={styles.headerSection}>Thông tin ứng dụng</Text>
      <Text style={styles.subText}>Phiên bản 1.0.0</Text>
      <Text style={styles.subText}>©2023 từ 1 nhóm chuyên nước đến chân mới chạy</Text>
      <Text style={styles.headerSection}>Liên hệ</Text>
      <Text style={styles.subText}>Hotline: 1900 1234</Text>
      <Text style={styles.subText}>Email: 21020098@vnu.edu.vn </Text>

    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  headerSection: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  itemSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  subText: {
    paddingVertical: 8,
  }
})
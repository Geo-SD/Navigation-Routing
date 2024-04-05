import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import Todoform from '../../Components/todoform';
import Todolist from '../../Components/todolist';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  return (
    <MainLayout>
      <SafeAreaView>
        <Todoform />
        <Todolist />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}
export default HomeScreen;

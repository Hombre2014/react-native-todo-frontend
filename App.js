import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Animated, Dimensions } from 'react-native';
import FormHeader from './app/components/FormHeader';
import FormSelectorBtn from './app/components/FormSelectorBtn';
import LoginForm from './app/components/LoginForm';
import SignupForm from './app/components/SignupForm';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import ImageUpload from './app/components/ImageUpload';

const { width } = Dimensions.get('window');

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef(null);

  const fetchAPI = async () => {
    try {
      const res = await axios.get('http://192.168.2.104:8000/');
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0]
  });

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20]
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40]
  });

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)']
  });

  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
  });

  return (
    <View style={{ fle: 1, paddingTop: 60 }}>
      <View style={{ height: 80 }}>
        <FormHeader
          leftHeading='Welcome '
          rightHeading='Back'
          subHeading='YouTube Task Manager'
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 }}>
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title='Login'
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title='Sign Up'
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <LoginForm />
        <ScrollView>
          <SignupForm />
        </ScrollView>
      </ScrollView>
    </View>
  );

  // return (
  //   <ImageUpload />
  // );
}

const styles = StyleSheet.create({
  borderLeft: { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  borderRight: { borderTopRightRadius: 8, borderBottomRightRadius: 8 }
});

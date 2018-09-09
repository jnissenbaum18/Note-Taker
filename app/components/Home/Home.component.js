import React, { Component } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

class Home extends Component {
    render () {
        const {setTitle, setText, title, text, onAboutPress} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.titleHeading}>Note Title</Text>
                <TextInput style={styles.titleTextInput} 
                    onChangeText={setTitle} value={title} />
                <Text style={styles.textAreaTitle}> Please enter your note here</Text>
                <TextArea style={styles.textArea} text={text} onTextChange={setText}/>
                <View style={styles.bottomBar}>
                    <View style={styles.bottomBarWrapper}>
                        <Text style={styles.saveBtn}>Save</Text>
                        <Text style={styles.characterCount}>{text.length} characters</Text>
                    </View>
                </View>
                <View>
                    <Button 
                        onPress={onAboutPress}
                        title="About Page"
                    />
                </View>
            </View>
        )
    }
}

Home.propTypes = {
    setTitle: PropTypes.func,
    setText: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string,
    onAboutPress: PropTypes.func
}

export default Home
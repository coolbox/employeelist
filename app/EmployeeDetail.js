import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';

let {width, height} = Dimensions.get("window");

export default class EmployeeDetail extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      email: this.props.email,
      name: this.props.name,
      phone: this.props.phone,
      city: this.props.city,
      modalVisible: false
    };
  }

  state = {
    modalVisible: false,
  }

  onPressCloseButton(visible){
    this.setState({
      modalVisible: visible
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.modalVisible}
          animationType={"slide"}
          transparent={true}
        >
          <View
            style={styles.modal}
          >
            <View style={styles.modalColumn}>
              <View style={styles.modalRow}>
                <Text style={styles.rowText}>ID:</Text>
                <Text style={styles.rowText}>{this.state.id}</Text>
              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>Name:</Text>
                <Text style={styles.rowText}>{this.state.name}</Text>
              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>Email:</Text>
                <Text style={styles.rowText}>{this.state.email}</Text>
              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>City:</Text>
                <Text style={styles.rowText}>{this.state.city}</Text>
              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>Phone:</Text>
                <Text style={styles.rowText}>{this.state.phone}</Text>
              </View>

              <Button
                title="Close"
                style={styles.modalCloseButton}
                onPress={this.onPressCloseButton.bind(this, false)}
              ></Button>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={() => {this.onPressCloseButton(!this.state.modalVisible) }}>

          <View style={styles.row}>
            <Text style={styles.rowText}>{this.state.name}</Text>
            <Text style={styles.rowText}>{this.state.email}</Text>
          </View>

        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'gray',
    marginTop: height - 450,
    paddingLeft: 50,
    paddingRight: 50,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f6f6f6',
    width: width
  },

  modalRow: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },

  modalColumn: {
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: 'white',
  },

  rowText: {
    fontSize: 10,
    flex: 1,
    justifyContent: 'center'
  },

  modalCloseButton: {
    padding: 20,
    color: 'blue'
  }
});

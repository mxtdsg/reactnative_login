import React from 'react';
import { 
  StyleSheet, Text, View,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Login extends React.Component {


    render() {
        const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
        const tableData = [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
        ];
        return (

            <View style={styles.container}>
                <Text style={styles.text}>Welcome</Text>

                <Table style={styles.table} borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                </Table>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
    },
    text: {
        color: '#fff',
    },
    table: { width: 360 },
    head: { 
        height: 100,
        // backgroundColor: '#f1f8ff',
        // backgroundColor: 'white',
    },
    row: {
        height: 100,
    }
});

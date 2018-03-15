import React from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity, AsyncStorage,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { table: '' };
        table = () => {
            fetch('http://172.31.99.206:3000/users/table', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then ((res) => {
                if(res.success === true) {
                    alert('successssss!');
                    this.setState({"table": res.table});
                }
                else {
                    alert(res.message);
                }
            })
            .done();
        }
    }

    table = () => {
        fetch('http://YOUR_IP:3000/users/table', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then ((res) => {
            if(res.success === true) {
                alert('successssss!');
                this.setState({"table": res.table});
            }
            else {
                alert(res.message);
            }
        })
        .done();
    }

    render() {
        const tableHead = ['id', 'username', 'pass'];
        var tableData = [];
        var table = this.state.table;
        for(let i = 0; i < table.length; i++){
            tableData.push(
                [ table[i].id, table[i].username, table[i].password ]

        )}
        console.log(tableData);
        return (
            <View style={styles.container}>

                <Text style={styles.text}>Welcome</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.table}>
                    <Text>Read DB</Text>
                </TouchableOpacity>

                <Table style={styles.table} borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
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
        backgroundColor: 'pink',
        // backgroundColor: 'white',
    },
    row: {
        height: 100,
    }
});

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
  Alert,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setMdp] = useState("");

  const submit = () => {
    if (password.length <= 6) {
      alert(`Je regrette, Dave. Cela m'est malheureusement impossible.`);
    } else {
      alert(
        `Cette mission est trop importante pour moi. Je ne puis tolérer que vous la mettiez en péril.`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonjour Dave</Text>
      <StatusBar style="auto" />
      <View style={styles.input}>
        <TextInput
          style={styles.placeholderA}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          value={email}
          keyboardType={"email-address"}
        />
        <TextInput
          style={styles.placeholderA}
          secureTextEntry={true}
          onChangeText={(password) => setMdp(password)}
          value={password}
          placeholder="Password"
        />
      </View>
      <Pressable onPress={submit}>
        <Text style={{ textAlign: "center" }}> Touch it </Text>
      </Pressable>
    </View>

/* <form onSubmit={this.handleSubmit}>
<label>
  Essay:
  <textarea value={this.state.value} onChange={this.handleChange} />
</label>
<input type="submit" value="Envoyer" />
</form> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontSize: 25,
  },
  input:{
    marginVertical: 40,
    alignContent: "center",
  }
});

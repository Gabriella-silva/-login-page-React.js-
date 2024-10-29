import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const SignupScreen = ({ navigation }) => {
	const [cep, setCep] = useState('');
	const [numero, setNumero] = useState('');
	const [termos, setTermos] = useState(false);
	const [focusedInput, setFocusedInput] = useState(null);

	const handleCadastro = () => {
		alert('Cadastro realizado!');
	};

	const handleFocus = (inputName) => {
		setFocusedInput(inputName);
	};

	const handleBlur = () => {
		setFocusedInput(null);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Inscreva-se</Text>
			<View style={styles.container2}>
				<Text style={styles.label}>Nome</Text>
				<TextInput 
					style={focusedInput === 'nome' ? styles.inputFocused : styles.input} 
					onFocus={() => handleFocus('nome')} 
					onBlur={handleBlur}
				/>
				<Text style={styles.label}>Email</Text>
				<TextInput 
					style={focusedInput === 'email' ? styles.inputFocused : styles.input} 
					onFocus={() => handleFocus('email')} 
					onBlur={handleBlur}
				/>
				<Text style={styles.label}>Senha</Text>
				<PasswordInput />
				<View style={styles.row}>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>CEP</Text>
						<TextInput
							style={focusedInput === 'cep' ? styles.inputFocused : styles.input}
							value={cep}
							onChangeText={setCep}
							onFocus={() => handleFocus('cep')}
							onBlur={handleBlur}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Número</Text>
						<TextInput
							style={focusedInput === 'numero' ? styles.inputFocused : styles.input}
							value={numero}
							onChangeText={setNumero}
							onFocus={() => handleFocus('numero')}
							onBlur={handleBlur}
						/>
					</View>
				</View>
				<Text style={styles.label}>Rua</Text>
				<TextInput 
					style={focusedInput === 'rua' ? styles.inputFocused : styles.input} 
					onFocus={() => handleFocus('rua')} 
					onBlur={handleBlur}
				/>
				<Text style={styles.label}>Cidade</Text>
				<TextInput 
					style={focusedInput === 'cidade' ? styles.inputFocused : styles.input} 
					onFocus={() => handleFocus('cidade')} 
					onBlur={handleBlur}
				/>
				<View style={styles.checkboxContainer}>
					<CheckBox
						value={termos}
						onValueChange={setTermos}
					/>
					<Text style={styles.checkboxLabel}>Concordo com os Termos e Condições</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={handleCadastro}
					disabled={!termos}
				>
					<Text style={styles.buttonText}>Cadastrar Conta</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const PasswordInput = () => {
	const [isSecure, setIsSecure] = useState(true);

	return (
		<View style={styles.passwordContainer}>
			<TextInput
				secureTextEntry={isSecure}
				style={styles.input}
			/>
			<TouchableOpacity style={styles.eyeIcon} onPress={() => setIsSecure(!isSecure)}>
				<Icon name={isSecure ? "eye-off-outline" : "eye-outline"} size={24} color="#333" />
			</TouchableOpacity>
		</View>
	);
};

const LoginScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<Text style={styles.label}>Email</Text>
			<TextInput style={styles.input} />
			<Text style={styles.label}>Senha</Text>
			<PasswordInput />
			<TouchableOpacity style={styles.button} onPress={() => {/* Lógica de login */}}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
				<Text style={styles.buttonText}>Não tem uma conta? Cadastro</Text>
			</TouchableOpacity>
		</View>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Cadastro">
				<Stack.Screen name="Cadastro" component={SignupScreen} options={{ headerShown: false }} />
				<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 1,
		backgroundColor: '#F9F8F6'
	},
	container2: {
		height: '80%',
		width: '90%',
		justifyContent: 'flex-start',
		alignSelf: 'center',
		padding: 10,
		backgroundColor: '#FFFFFF',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
		borderRadius: 2,
	},
	title: {
		fontSize: 40,
		marginBottom: 15,
		fontWeight: 'bold',
		color: '#464237',
		marginTop: -40,
		marginLeft: 15
	},
	label: {
		marginBottom: 5,
		fontSize: 16,
		color: '#333',
		fontWeight: 'bold'
	},
	input: {
		borderWidth: 1,
		borderColor: '#d2cec5',
		marginBottom: 10,
		padding: 8,
		backgroundColor: '#F9F8F6',
		flex: 1,
		borderRadius: 4,
	},
	inputFocused: {
		borderWidth: 1,
		borderColor: '#FFBB12', // Cor da borda quando focado
		marginBottom: 10,
		padding: 8,
		backgroundColor: '#F9F8F6',
		flex: 1,
		borderRadius: 4,
		shadowColor: '#FFBB12', // Cor da sombra
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
	},
	passwordContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	eyeIcon: {
		position: 'absolute',
		right: 10,
		marginBottom: 14
	},
	button: {
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: '#FFBB12',
		padding: 10,
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: '#764701',
		fontSize: 16,
		fontWeight: '700'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
		borderRadius: 100,
	},
	inputContainer: {
		flex: 1,
		marginRight: 10,
		borderRadius: 1,
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	checkboxLabel: {
		marginLeft: 8,
		fontWeight: '600'
	},
});
``

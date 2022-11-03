import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'a pair of shoes',
    amount: 59.99,
    date: new Date('2022/10/27'),
  },
  {
    id: 'e2',
    description: 'a pair of trousers',
    amount: 89.69,
    date: new Date('2022/10/25'),
  },
  {
    id: 'e3',
    description: 'some bananas',
    amount: 9.69,
    date: new Date('2022/11/02'),
  },
  {
    id: 'e4',
    description: 'a book',
    amount: 19.69,
    date: new Date('2022/10/29'),
  },
  {
    id: 'e5',
    description: 'a guitar',
    amount: 289.69,
    date: new Date('2022/09/28'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingVertical: 8,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

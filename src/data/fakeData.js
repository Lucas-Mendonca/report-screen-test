export const fakeDatabase = {
    // months: ['01/202X','02/202X','03/202X','04/202X','05/202X'],
    bloodDonors: {
        categories: {
            frequentDonators: [10,15,60,72,107],
            newDonators: {
                newFrequentDonators: [0,5,45,12,35],
                oneTimeDonators: [10,7,66,6,9]
            }
        }
    },
    bloodTypes: {
        categories: {
            A: {
                Positive: [5,2,20,1,15],
                Negative: [0,1,20,30,35]
            },
            B: {
                Positive: [5,4,10,15,30],
                Negative: [0,3,10,15,20]
            },
            AB: {
                Positive: [3,2,15,5,0],
                Negative: [2,3,15,5,0]
            },
            O: {
                Positive: [5,0,20,0,6],
                Negative: [0,1,16,1,1]
            }
        }
    }
}
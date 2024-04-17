<template>
    <p>Maximum Paid: {{MaximumPaidDays}}</p>
    <p>Maximum UnPaid: {{MaximumUnpaidDays}}</p>
    <div class="date-range-picker">
        <div class="holiday-type-selection">
            <label>
                <input type="radio" value="paid" v-model="holidayType" /> Paid Holiday
            </label>
            <label>
                <input type="radio" value="unpaid" v-model="holidayType" /> Unpaid Holiday
            </label>
        </div>

        <div class="calendar" v-if="holidayType">
            <input type="date" v-model="startDate">
        </div>
        <div class="calendar" v-if="holidayType">
            <input type="date" v-model="endDate">
        </div>

        <button @click="calculateDays" v-if="holidayType">Calculate Days</button>
        <button @click="resetDates" v-if="holidayType">Reset Dates</button>

        <p v-if="totalDays !== null && !errorMessage && proceedingMessage">
            Total Days: {{ totalDays }}
        </p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="proceedingMessage">{{ proceedingMessage }}</p>
        <label v-if="holidayType === 'paid' && totalDays > MaximumPaidDays">
            <input type="checkbox" v-model="coverWithUnpaid" />
            Cover with unpaid days
        </label>
        <label v-if="showEmergencyCheckbox">
            <input type="checkbox" v-model="emergencyProceed" />
            Check 'emergency' button
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            startDate: this.getSavedDate('startDate', true),
            endDate: this.getSavedDate('endDate'),
            today: new Date().toISOString().substring(0, 10), // Keep today's date in YYYY-MM-DD format
            totalDays: null,
            errorMessage: '',
            proceedingMessage: '',
            showEmergencyCheckbox: false,
            emergencyProceed: false,
            MaximumPaidDays: 21,
            MaximumUnpaidDays: 35,
            coverWithUnpaid: false,
            holidayType: '', // 'paid' or 'unpaid'
        };
    },
    watch: {
        startDate(newVal) {
            localStorage.setItem('startDate', newVal);
        },
        endDate(newVal) {
            localStorage.setItem('endDate', newVal);
        }
    },
    methods: {
        calculateDays() {
            // Reset state
            this.errorMessage = '';
            this.proceedingMessage = '';
            this.showEmergencyCheckbox = false;

            if (!this.startDate || !this.endDate) {
                this.errorMessage = 'Both start and end dates must be selected.';
                this.totalDays = null;
                return;
            }

            // Check if start date is in the past
            const today = new Date(this.today);
            const start = new Date(this.startDate);
            if (start < today) {
                this.errorMessage = 'Start date cannot be in the past.';
                this.totalDays = null;
                return;
            }

            const end = new Date(this.endDate);
            if (start > end) {
                this.errorMessage = 'Start date must be before end date.';
                this.totalDays = null;
            } else {
                this.totalDays = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1; // Include both start and end dates
                this.handleHolidayAllocation();
            }
        },

        handleHolidayAllocation() {
            if (this.holidayType === 'paid') {
                if (this.totalDays > this.MaximumPaidDays) {
                    const unpaidDaysNeeded = this.totalDays - this.MaximumPaidDays;
                    if (this.coverWithUnpaid && unpaidDaysNeeded <= this.MaximumUnpaidDays) {
                        this.proceedingMessage = `Proceeding with ${this.MaximumPaidDays} paid and ${unpaidDaysNeeded} unpaid holidays.`;
                        this.MaximumUnpaidDays -= unpaidDaysNeeded; // Deduct the unpaid days used
                        this.MaximumPaidDays = 0; // Paid days limit reached and used up
                    } else if (!this.coverWithUnpaid || unpaidDaysNeeded > this.MaximumUnpaidDays) {
                        this.errorMessage = 'Exceeded the maximum amount of allocated days.';
                        this.showEmergencyCheckbox = true;
                    }
                } else {
                    this.proceedingMessage = 'Proceeding with paid holidays.';
                    this.MaximumPaidDays -= this.totalDays; // Deduct the paid days used
                }
            } else if (this.holidayType === 'unpaid') {
                if (this.totalDays <= this.MaximumUnpaidDays) {
                    this.proceedingMessage = 'Proceeding with unpaid holidays.';
                    this.MaximumUnpaidDays -= this.totalDays; // Deduct the unpaid days used
                } else {
                    this.errorMessage = 'Exceeded the maximum amount of unpaid days.';
                    this.showEmergencyCheckbox = true;
                }
            }
        },

        resetDates() {
            localStorage.removeItem('startDate');
            localStorage.removeItem('endDate');
            this.startDate = this.getTodayDate();  // Reset start date to today's date
            this.endDate = '';  // Clear end date
            this.totalDays = null;  // Clear calculated days
            this.errorMessage = '';  // Clear any error message
            this.proceedingMessage = '';  // Clear the proceeding message
            this.showEmergencyCheckbox = false;  // Hide the emergency checkbox
            this.holidayType = '';  // Clear the holiday type selection
        },

        getSavedDate(key, isStartDate = false) {
            const savedDate = localStorage.getItem(key);
            return savedDate ? savedDate : this.getTodayDate(isStartDate);
        },
        getTodayDate(isStartDate = false) {
            if (isStartDate) {
                const today = new Date();
                return today.toISOString().substring(0, 10);  // Format as YYYY-MM-DD
            }
            return '';
        }
    }
}
</script>

<style scoped>
.date-range-picker {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
}

.calendar input[type="date"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 5px;
}

button:hover {
    background-color: #45a049;
}

p {
    margin-top: 20px;
    font-size: 16px;
    color: #333;
}

.error {
    color: red;
}
</style>

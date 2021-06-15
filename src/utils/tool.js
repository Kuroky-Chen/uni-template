import dayjs from 'dayjs'

export const dateFormat = (time, type = 'YYYY-MM-DD HH:mm:ss') => {
	if (dayjs(time).isValid()) {
		return dayjs(time).format(type);
	}
}
